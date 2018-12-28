import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeatColumn from './SeatColumn';


class SeatRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const letters = this.props.seatMapInfo.filter(smp => smp.segId == this.props.preSeatSelectedItems.selectedSegment)[0].colLetters;

    const colsArray = [];
    letters.forEach((letr, indx) => {
      let className = 'col-xs-1 ';
      if ((indx == 0) || (indx == letters.length / 2)) {
        className += 'offset-2 ';
      }
      colsArray.push(
        (<div className={className}>
          <SeatColumn
            key={letr}
            rowId={this.props.rowId}
            firstClassLim={this.props.firstClassLim}
            pickedSeats={this.props.pickedSeats}
            colName={letr}
          />
        </div>),
      );
    });

    return (

      <div className="row">
        {colsArray}
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    preSeatSelectedItems: state.fetchPreseatSelectedPaxReducer,
    seatMapInfo: state.seatMapInfoReducer,
  };
}

export default connect(mapStateToProps)(SeatRow);
