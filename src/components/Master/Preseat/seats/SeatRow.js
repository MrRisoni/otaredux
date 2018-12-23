import React from 'react';
import SeatColumn from './SeatColumn';

const SeatRow = (props) => {
    return (

        <div className="row">
            <div className="col-xs-1 offset-2">
                <SeatColumn
                    rowId={props.rowId}
                    passengers={props.passengers}
                    colName="A"></SeatColumn>
            </div>


            <div className="col-xs-1">
                <SeatColumn
                    rowId={props.rowId}
                    passengers={props.passengers}
                    colName="B"></SeatColumn>
            </div>



            <div className="col-xs-1">
                <SeatColumn
                    rowId={props.rowId}
                    passengers={props.passengers}
                    colName="C"></SeatColumn>
            </div>




            <div className="col-xs-1 offset-1">
                <SeatColumn
                    rowId={props.rowId}
                    passengers={props.passengers}
                    colName="C"></SeatColumn>
            </div>


            <div className="col-xs-1">
                <SeatColumn
                    rowId={props.rowId}
                    passengers={props.passengers}
                    colName="E"></SeatColumn>
            </div>



            <div className="col-xs-1">
                <SeatColumn
                    rowId={props.rowId}
                    passengers={props.passengers}
                    colName="F"></SeatColumn>
            </div>


        </div>

    )
};

export default SeatRow;
