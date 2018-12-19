import React from 'react';
import CabinSegment from "./CabinSegment";
var Translate = require('react-redux-i18n').Translate;


const CabinTrip = (props) => {
    console.log(props);

    const departTrip = props.segments.filter(sg => sg.leg ==0);
    const returnTrip = props.segments.filter(sg => sg.leg ==1);

    return (
        <section>

            <div className="alert alert-info" role="alert">

                <div className="row">


                    <div className="col-md-6">
                        <Translate value="SelectCabinPerSegment"/>
                    </div>
                    <div className="col-md-2">
                        <i className="fas fa-address-card"/>
                    </div>


                    <div className="col-md-2">
                        <button className="btn btn-sm btn-dark btn-block btnToggle"
                                data-toggle="collapse"
                                data-target={`#cabinSelectionDivCollapse${props.pax.id}`}
                                aria-expanded="false" aria-controls="collapseExample">
                            Toggle
                        </button>
                    </div>

                </div>
            </div>


            <div className="alert alert-info" role="alert">

                <div className="row">
                    Departure
                </div>
            </div>

            <CabinSegment segs={departTrip} pax={props.pax}/>



            <div className="alert alert-info" role="alert">

                <div className="row">
                    Return
                </div>
            </div>



        </section>
    )
};

export default CabinTrip;
