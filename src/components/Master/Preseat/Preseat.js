import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeatShower from './display/SeatShower';
import SeatRow from './seats/SeatRow';
import { fillRange } from '../../../helpers';
import { bindActionCreators } from 'redux';

import * as actsPreseat from '../../../actions/master/actionsPreseat';


import './preseat.css';

class Preseat extends Component {
  constructor(props) {
    super(props);

    this.resetClick = this.resetClick.bind(this);
  }

  resetClick() {
    this.props.resetSeatsHandler();
  }


  render() {
    const maxRows = this.props.seatMapInfo.filter(segInfo => segInfo.segId === this.props.preSeatSelectedItems.selectedSegment)[0].airplaneRows;
    const rowArray = fillRange(1, maxRows);
    const firstClassLim = this.props.seatMapInfo.filter(segInfo => segInfo.segId === this.props.preSeatSelectedItems.selectedSegment)[0].firstClassLimit;


    // calculate chosen seats

    // check if seat has been selected by this booking
    const activePaxIds = this.props.passengers.filter(px => ((px.active == true) && (px.type !== 'INF'))).map(pixie => pixie.id);
    const pickedSeats = this.props.selectedSeats.filter(sst => ((sst.seatNo !== '') && (activePaxIds.indexOf(sst.paxId) > -1))).map(filtSt => filtSt.seatNo);

    return (


      <section id="preSeat">
        <div className="row">
          <div className="col-8">
            <div className="alert alert-primary" role="alert">
              <div className="row">
                <div className="col-5">


                                Select your seats
                </div>

                <div className="col-4">
                  <button onClick={this.resetClick} className="btn btn-sm btn-warning"> Reset</button>
                </div>

                <div className="col-3">
                  <button
                    className="btn btn-sm btn-dark btnToggle"
                    data-toggle="collapse"
                    data-target="#preseatComponents"
                  >


                                    Toggle
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div id="preseatComponents" className="show">
          <SeatShower />

          <section id="seatRowsElement">
            {rowArray.map(ri => (
              <SeatRow
                key={ri}
                firstClassLim={firstClassLim}
                pickedSeats={pickedSeats}
                rowId={ri}
              />
            ))}


          </section>
        </div>


      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    passengers: state.passengersMasterReducer,
    preSeatSelectedItems: state.fetchPreseatSelectedPaxReducer,
    seatMapInfo: state.seatMapInfoReducer,
    selectedSeats: state.fetchSeatSelectionReducer,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    resetSeatsHandler: actsPreseat.resetSeatsAction,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Preseat);
