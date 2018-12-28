import React from 'react';
import Seat from './Seat';

const SeatColumn = props => (
  <div className="row">

    <div className="col-1">
      <Seat
        rowId={props.rowId}
        colName={props.colName}
        firstClassLim={props.firstClassLim}
        pickedSeats={props.pickedSeats}
      />
    </div>


  </div>
);

export default SeatColumn;
