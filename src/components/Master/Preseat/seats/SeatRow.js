import React from 'react';
import SeatColumn from './SeatColumn';

const SeatRow = (props) => {
  const letters = props.seatMapInfo.filter(smp => smp.segId == props.preSeatSelectedItems.selectedSegment)[0].colLetters;

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
          rowId={props.rowId}
          cabinSelection={props.cabinSelection}
          preSeatSelectedItems={props.preSeatSelectedItems}
          passengers={props.passengers}
          seatMapInfo={props.seatMapInfo}
          firstClassLim={props.firstClassLim}
          selectedSeats={props.selectedSeats}
          pickSeatHandler={props.pickSeatHandler}
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
};

export default SeatRow;
