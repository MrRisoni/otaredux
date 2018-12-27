import React, { Component } from 'react';
import { seatCost } from '../../../../helpers';

class SeatSegmentRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cssClass: '',
    };
  }


  render() {
      const segmentId =this.props.segment.id;
      const paxId = this.props.paxData.id;

    const seatPrice = seatCost({
      segId: segmentId,
      paxId: paxId,
      seatInfo: this.props.seatMapInfo,
      cabins: this.props.cabinSelection,
    });

    const selectedSeatNo = this.props.selectedSeats.filter(st => ( (st.paxId == paxId) && (st.segId == segmentId)))[0].seatNo;

    return (
      <div className="card text-white bg-primary segmentSeat">
        <div className="card-body">
          {' '}
          {/* v-bind:class="selectedTrigger" */}

          <div className="row">
            <div className="col-2">
              {this.props.segment.from}
            </div>

            <div className="col-2">

              {this.props.segment.to}
            </div>


            <div className="col-2">


                Cost
                {' '}
              {seatPrice}
              {' '}
              {this.props.currency.code}
            </div>


              {selectedSeatNo !== '' &&
                  (<div className="col-4">
                          Seat {selectedSeatNo}
                      </div>)
              }

            <div className="col-2">

              <button type="button" className="btn btn-info">
                                PickSeat
              </button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default SeatSegmentRow;

