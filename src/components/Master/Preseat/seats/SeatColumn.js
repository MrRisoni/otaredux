import React from 'react';
import Seat from './Seat';

const SeatColumn = props => (
  <div className="row">

    <div className="col-1">
      <Seat
        rowId={props.rowId}
        passengers={props.passengers}
        colName={props.colName}
        preSeatSelectedItems={props.preSeatSelectedItems}
        pickSeatHandler={props.pickSeatHandler}
      />
    </div>


  </div>
);

export default SeatColumn;
