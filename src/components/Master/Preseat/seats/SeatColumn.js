import React from 'react';
import Seat from './Seat';

const SeatColumn = (props) => {
    return (
        <div className="row">

            <div className="col-1">
                <Seat rowId={props.rowId}
                      passengers={props.passengers}
                      colName={props.colName}></Seat>
        </div>


</div>
    )
};

export default SeatColumn;
