import React from 'react';
import CabinPerLeg from './CabinPerLeg';

const CabinSelection = function (props) {

    let legsDiv = [<CabinPerLeg trip={props.tripData[0]}
                                passengers={props.passengers}
                                cabins={props.cabins}
                    />];

    if (props.tripData.CabinPerLeg > 1) {
        legsDiv.push(<CabinPerLeg trip={props.tripData[1]}
                                  passengers={props.passengers}
                                  cabins={props.cabins}/>)
    }

    return (

        <div className="row cabinSelection">
            <div className="col-md-12">

                <div className="card">
                    <div className="card-header bg-light">

                        <div className="row">

                            <div className="col-sm-3">
                                Cabin Selection
                            </div>

                            <div className="col-sm-2 offset-sm-6">
                                <button className="btn btn-sm btn-dark btn-block btnToggle"
                                        data-toggle="collapse"
                                        data-target="#shipCabinsCollapse" aria-expanded="false"
                                        aria-controls="collapseExample">
                                    Toggle
                                </button>
                            </div>

                        </div>
                    </div>


                    <div className="card-body collapse show" id="shipCabinsCollapse">

                        {legsDiv}

                    </div>
                </div>
            </div>

        </div>)
};


export default CabinSelection;


