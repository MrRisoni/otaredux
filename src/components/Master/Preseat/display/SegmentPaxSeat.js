import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeatSegmentRow from './SeatSegmentRow';
import { preseatAllowed } from '../../../../helpers';


class SegmentPaxSeat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-8">
          <div className="card segsPaxSeats ">

            <div className="card-header">
              <div className="row">
                <div className="col-4">

                $t('Passenger') #
                  {this.props.paxData.humanId}
                </div>
                <div className="col-4">
                  {' '}
                  {this.props.paxData.name}
                </div>
                <div className="col-4">
                  {' '}
                  {this.props.paxData.surname}
                </div>


              </div>
            </div>


            <div className="card-body">
              {this.props.segments.filter(sg => preseatAllowed({
                seg: sg, pax: this.props.paxData, cabin: this.props.cabinSelection, seatMap: this.props.seatMapInfo,
              }))
                .map(filtsg => (
                  <SeatSegmentRow
                    paxData={this.props.paxData}
                    segment={filtsg}
                  />
                ))}

            </div>

          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    segments: state.getLegsReducer,
    cabinSelection: state.fetchCabinPaxPerSegmentReducer,
    seatMapInfo: state.seatMapInfoReducer,

  };
}
export default connect(mapStateToProps)(SegmentPaxSeat);
