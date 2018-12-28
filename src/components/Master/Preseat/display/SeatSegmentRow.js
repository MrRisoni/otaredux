import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';


import { Translate } from 'react-redux-i18n';
import { seatCost } from '../../../../helpers';

import * as actsPreseat from '../../../../actions/master/actionsPreseat';


class SeatSegmentRow extends Component {
  constructor(props) {
    super(props);

    this.clickPickSeat = this.clickPickSeat.bind(this);
  }


  clickPickSeat() {
    console.log('firing pickPaxSegForSeatHandler');
    this.props.pickPaxSegForSeatHandler(this.props.segment.id, this.props.paxData.id);
  }


  render() {
    const segmentId = this.props.segment.id;
    const paxId = this.props.paxData.id;

    let seatPrice = seatCost({
      segId: segmentId,
      paxId,
      seatInfo: this.props.seatMapInfo,
      cabins: this.props.cabinSelection,
    });

    seatPrice *= this.props.currency.rate;
    seatPrice = seatPrice.toFixed(2);

    console.log('this.props.selectedSeats');
    console.log(this.props.selectedSeats);

    const selectedSeatNo = this.props.selectedSeats.filter(st => ((st.paxId == paxId) && (st.segId == segmentId)))[0].seatNo;
    let cardClassName = '';

    if ((this.props.selectedPaxSegPreseat.selectedSegment === this.props.segment.id) && (this.props.selectedPaxSegPreseat.selectedPaxId === this.props.paxData.id)) {
      cardClassName = 'text-white  bg-primary ';
    }
    // <div className={`card text-white  segmentSeat bg-primary`}>

    // <div className={`card text-white  segmentSeat ${cardClassName}`}>

    return (
      <div className={`card   segmentSeat ${cardClassName}`}>
        <div className="card-body">
          <div className="row">
            <div className="col-2">
              {this.props.segment.from}
            </div>

            <div className="col-2">

              {this.props.segment.to}
            </div>


            <div className="col-2">


              <Translate value="general.Cost" />
              {' '}
              {seatPrice}
              {' '}
              {this.props.currency.code}
            </div>


            {selectedSeatNo !== ''
                  && (
                  <div className="col-4">


                    <Translate value="preseat.Seat" />
                      <p className="seatNumber">{selectedSeatNo}</p>
                  </div>
                  )
              }

            <div className="col-2">

              <button type="button" className="btn btn-info" onClick={this.clickPickSeat}>


                <Translate value="preseat.PickSeat" />

              </button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

/*
SeatSegmentRow.propTypes = {
    name: PropTypes.string
}; */

function mapStateToProps(state) {
  return {
    currency: state.currentCurrencyReducer,
    cabinSelection: state.fetchCabinPaxPerSegmentReducer,
    seatMapInfo: state.seatMapInfoReducer,
    selectedSeats: state.fetchSeatSelectionReducer,
    selectedPaxSegPreseat: state.fetchPreseatSelectedPaxReducer,

  };
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    pickPaxSegForSeatHandler: actsPreseat.pickPaxSegForPreseatAction,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(SeatSegmentRow);
