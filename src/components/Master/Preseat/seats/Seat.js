import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actsPreseat from '../../../../actions/master/actionsPreseat';


class Seat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seatClassObject: '',
    };

    this.pickThisSeat = this.pickThisSeat.bind(this);
  }

  pickThisSeat() {
    this.props.pickSeatHandler(this.props.colName + this.props.rowId, this.props.preSeatSelectedItems.selectedSegment,
      this.props.preSeatSelectedItems.selectedPaxId);
  }

  decideSeatClass() {
    const seatName = this.props.colName + this.props.rowId;

    let seatNotAllowed = false;
    let seatNotAvailable = false;

    const selectedSeg = this.props.preSeatSelectedItems.selectedSegment;
    const selPaxId = this.props.preSeatSelectedItems.selectedPaxId;
    const firstClassUpToRow = this.props.firstClassLim;

    const cabinForSelectedPaxSegment = this.props.cabinSelection.filter(cb => ((cb.segId == selectedSeg) && (cb.paxId == selPaxId)))[0].cabin;


    // check if seat has been reserved by another PNR
    const reservedSeats = this.props.seatMapInfo.filter(smp => smp.segId == selectedSeg)[0].taken;
    if (reservedSeats.indexOf(seatName) > -1) {
      seatNotAvailable = true;
    }

    const seatChosen = (this.props.pickedSeats.indexOf(seatName) > -1);


    if ((seatNotAvailable == false) && (seatChosen == false)) {
      if ((cabinForSelectedPaxSegment == 'W') || (cabinForSelectedPaxSegment == 'Y')) {
        if (this.props.rowId < firstClassUpToRow) {
          seatNotAllowed = true;
        }
      }

      if ((cabinForSelectedPaxSegment != 'W') && (cabinForSelectedPaxSegment != 'Y')) {
        if (this.props.rowId > firstClassUpToRow) {
          seatNotAllowed = true; // pax is business class , he cannot pick economy
        }
      }
    }

    let seatClassName = '';
    if (seatNotAllowed) {
      seatClassName += ' seatNotAllowed ';
    }

    if (seatChosen) {
      seatClassName += ' seatChosen ';
    }

    if (seatNotAvailable) {
      seatClassName += ' seatNotAvailable ';
    }

    return seatClassName;
  }


  render() {
    return (
      <div className="row">
        <div className="col-1">
          <button type="button" onClick={this.pickThisSeat} className={`btn seatButton btn-sm btn-primary${this.decideSeatClass()}`}>
            {this.props.colName}
            {' '}
            {this.props.rowId}
          </button>
        </div>
      </div>

    );
  }
}


function mapStateToProps(state) {
  return {
    preSeatSelectedItems: state.fetchPreseatSelectedPaxReducer,
    seatMapInfo: state.seatMapInfoReducer,
    cabinSelection: state.fetchCabinPaxPerSegmentReducer,


  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    pickSeatHandler: actsPreseat.pickSeatAction,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Seat);
