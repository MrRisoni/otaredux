import React from 'react';
import SeatSegmentRow from './SeatSegmentRow';
import { preseatAllowed } from '../../../../helpers';

const SegmentPaxSeat = props => (
  <div className="row">
    <div className="col-8">
      <div className="card segsPaxSeats ">

        <div className="card-header">
          <div className="row">
            <div className="col-4">
                $t('Passenger') #
              {props.paxData.humanId}
            </div>
            <div className="col-4">
              {' '}
              {props.paxData.name}
            </div>
            <div className="col-4">
              {' '}
              {props.paxData.surname}
            </div>


          </div>
        </div>


        <div className="card-body">
          {props.segments.filter(sg => preseatAllowed({
            seg: sg, pax: props.paxData, cabin: props.cabinSelection, seatMap: props.seatMapInfo,
          }))
            .map(filtsg => (
              <SeatSegmentRow
                currency={props.currency}
                cabinSelection={props.cabinSelection}
                paxData={props.paxData}
                segment={filtsg}
              />
            ))}

        </div>

      </div>
    </div>
  </div>

);

export default SegmentPaxSeat;
