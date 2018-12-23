import React from 'react';
import SeatColumn from './SeatColumn';

const SeatRow = (props) => {

    const letters = ['A','B','C','D','E','F'];
    let colsArray = [];
    letters.forEach(( letr,indx) => {
        let className="col-xs-1 ";
        if ((indx ==0) || (indx ==letters.length /2)) {
            className += "offset-2 ";
        }
        colsArray.push(
            (<div className={className}>
                <SeatColumn key={letr}
                    rowId={props.rowId}
                    passengers={props.passengers}
                    colName={letr}></SeatColumn>
            </div>)
        )
    });

    return (

        <div className="row">
            {colsArray}
        </div>

    )
};

export default SeatRow;
