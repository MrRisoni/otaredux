import React from 'react';
import Seat from './Seat';

const SeatColumn = (props) => {
    return (
        <div className="row">

            <div className="col-2">
                <Seat colName="colName" rowId="rowId"></Seat>
        </div>


</div>
    )
};

export default SeatColumn;
