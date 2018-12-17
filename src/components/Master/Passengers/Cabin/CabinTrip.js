import React from 'react';
var Translate = require('react-redux-i18n').Translate;


const CabinTrip = (props) => {
    console.log(props);
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


        </section>
    )
};

export default CabinTrip;
