import React from 'react';
import CabinSegment from "./CabinSegment";
import CabinLeg from "./CabinLeg";

var Translate = require('react-redux-i18n').Translate;


const CabinTrip = (props) => {
    console.log('CabinTrip');

    console.log(props);

    const departTrip = props.segments.filter(sg => sg.legId == 0);
    const returnTrip = props.segments.filter(sg => sg.legId == 1);

    return (
        <section>

            <div className="alert alert-info cabinTrip" role="alert">

                <div className="row">


                    <div className="col-6">
                        <Translate value="SelectCabinPerSegment"/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-couch"/>
                    </div>


                    <div className="col-2">
                        <button className="btn btn-sm btn-dark btn-block btnToggle"
                                data-toggle="collapse"
                                data-target={`#cabinSelectionDivCollapse${props.pax.id}`}
                                aria-expanded="false" aria-controls="collapseExample">
                            Toggle
                        </button>
                    </div>

                </div>
            </div>

            <div className="collapse" id={`cabinSelectionDivCollapse${props.pax.id}`}>




                <CabinLeg  currency={props.currency}
                           segs={departTrip} leg={0} pax={props.pax}/>




                <div className="alert alert-info cabinLegSelect" role="alert">

                    <div className="row">
                        Return
                    </div>
                </div>
            </div>


        </section>
    )
};

export default CabinTrip;
