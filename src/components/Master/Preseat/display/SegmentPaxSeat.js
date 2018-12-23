import React from 'react';
import SeatSegmentRow from './SeatSegmentRow';


const SegmentPaxSeat = (props) => {
    let seatSegsRows = [];
    props.segments.forEach(sg => {
        seatSegsRows.push(<SeatSegmentRow
            paxData={props.paxData} segment={sg}></SeatSegmentRow>)
    })


    /*  allow preseat
     const  paxClassForThisSeg = px.cabinList.filter(cb =>  cb.seg == seg.id)[0].cabin;
      console.log('cabClassForThisSeg ' + paxClassForThisSeg);
      return (seg.preseat.indexOf(paxClassForThisSeg) > -1);
     */
    return (
        <div className="row">
            <div className="col-8">
                <div className="card segsPaxSeats ">

                    <div className="card-header">
                        $t('Passenger') # {props.paxData.humanId}
                        {props.paxData.name} {props.paxData.surname}

                    </div>

                    {/* preseating only allowed in certain classNamees --> */}

                    <div className="card-body">
                        {seatSegsRows}
                    </div>

                </div>
            </div>
        </div>

    )
};

export default SegmentPaxSeat;
