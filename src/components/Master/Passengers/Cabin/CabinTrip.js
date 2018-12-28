import React, { Component } from 'react';
import { connect } from 'react-redux';
import CabinLeg from './CabinLeg';


import {Translate} from 'react-redux-i18n';


class CabinTrip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const departTrip = this.props.segments.filter(sg => sg.legId == 0);
    const returnTrip = this.props.segments.filter(sg => sg.legId == 1);

    return (
      <section>

        <div className="alert alert-info cabinTrip" role="alert">

          <div className="row">


            <div className="col-6">
              <Translate value="SelectCabinPerSegment" />
            </div>
            <div className="col-2">
              <i className="fas fa-chair" />
            </div>


            <div className="col-2">
              <button
                className="btn btn-sm btn-dark btn-block btnToggle"
                data-toggle="collapse"
                data-target={`#cabinSelectionDivCollapse${this.props.pax.id}`}
                aria-expanded="false"
                aria-controls="collapseExample"
              >

                               <Translate value="general.Toggle"/>
              </button>
            </div>

          </div>
        </div>

        <div className="collapse" id={`cabinSelectionDivCollapse${this.props.pax.id}`}>


          <CabinLeg key={0} segs={departTrip} leg={0} pax={this.props.pax} />


          <CabinLeg key={1} segs={returnTrip} leg={1} pax={this.props.pax} />

        </div>


      </section>
    );
  }
}
function mapStateToProps(state) {
  return {
    segments: state.getLegsReducer,

  };
}
export default connect(mapStateToProps)(CabinTrip);
