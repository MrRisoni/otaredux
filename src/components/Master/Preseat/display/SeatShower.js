import React from 'react';
import SegmentPaxSeat from './SegmentPaxSeat';


const SeatShower = props => (
  <div className="seatShower">
    {props.passengers.filter(px => (px.active && px.type !== 'INF')).map(px => (
      <SegmentPaxSeat
        paxData={px}
        seatMapInfo={props.seatMapInfo}
        preSeatSelectedItems={props.preSeatSelectedItems}
        cabinSelection={props.cabinSelection}
        selectedSeats={props.selectedSeats}
        currency={props.currency}
        segments={props.segments}
      />
    ))}
  </div>
);

export default SeatShower;
