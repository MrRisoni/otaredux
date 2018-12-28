import React, { Component } from 'react';
import { connect } from 'react-redux';
import SegmentPaxSeat from './SegmentPaxSeat';


class SeatShower extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="seatShower">
        {this.props.passengers.filter(px => (px.active && px.type !== 'INF')).map(px => (
          <SegmentPaxSeat
            paxData={px}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    passengers: state.passengersMasterReducer,

  };
}
export default connect(mapStateToProps)(SeatShower);
