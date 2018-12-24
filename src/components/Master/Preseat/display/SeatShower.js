import React from 'react';
import SegmentPaxSeat from './SegmentPaxSeat';


const SeatShower = (props) => {

    let segPaxSeats = [];
    props.passengers.forEach(px => {
        if ((px.active == true) && (px.type != 'INF')) {
            segPaxSeats.push(<SegmentPaxSeat paxData={px}
                                             cabinSelection={props.cabinSelection}
                                             currency={props.currency}
                                             segments={props.segments}></SegmentPaxSeat>)
        }
    });


    return (
        <div className="seatShower">
            {segPaxSeats}
        </div>
    )
};

export default SeatShower;
