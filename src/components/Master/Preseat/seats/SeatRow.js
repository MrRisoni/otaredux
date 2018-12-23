import React from 'react';
import SeatColumn from './SeatColumn';

const SeatRow = (props) => {
    return (

        <div className="row">
            <div className="col-1 offset-2">
                <SeatColumn rowId={props.rowId} colName="'A'"></SeatColumn>
            </div>
            <div className="col-1">
                <SeatColumn rowId={props.rowId} colName="'B'"></SeatColumn>
            </div>
            <div className="col-1">
                <SeatColumn rowId={props.rowId} colName="'C'"></SeatColumn>
            </div>

            <div className="col-1 offset-2">
                <SeatColumn rowId={props.rowId} colName="'E'"></SeatColumn>
            </div>
            <div className="col-1">
                <SeatColumn rowId={props.rowId} colName="'F'"></SeatColumn>
            </div>
            <div className="col-1">
                <SeatColumn rowId={props.rowId} colName="'G'"></SeatColumn>
            </div>
        </div>

    )
};

export default SeatRow;
