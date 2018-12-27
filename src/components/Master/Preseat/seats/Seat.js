import React, { Component } from 'react';

class Seat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seatClassObject: '',
    };

    this.pickThisSeat = this.pickThisSeat.bind(this);
  }

  pickThisSeat() {
    console.log(`Seat ${this.props.colName} ${this.props.rowId}`);
    console.log(this.props.preSeatSelectedItems);
    this.props.pickSeatHandler(this.props.colName + this.props.rowId, this.props.preSeatSelectedItems.selectedSegment,
      this.props.preSeatSelectedItems.selectedPaxId);
  }

  decideSeatClass() {
    const seatName = this.props.colName + this.props.rowId;

    let seatNotAllowed = false;
    let seatChosen = false;
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

    // check if seat has been selected by this booking
    this.props.selectedSeats.forEach((ssl) => {
      if ((ssl.segId == selectedSeg) && (ssl.seatNo !== '')) {
        this.props.passengers.forEach((px) => {
          if ((px.active === true) && (px.id == ssl.paxId)) {
            if (ssl.seatNo === seatName) {
              seatChosen = true;
            }
          }
        });
      }
    });


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

export default Seat;
