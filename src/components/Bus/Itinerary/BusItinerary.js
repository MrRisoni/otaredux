import React from 'react';
import BusSegment from "./BusSegment";

const BusItinerary = function (props) {

    let segments = [];
    props.segments.forEach((seg) => {
        segments.push(<BusSegment key={seg.id} data={seg}/>)
    });

    return (
        <div className="card">
            <div className="card-header">

                <div className="row">
                    <div className="col-sm-8">
                        Itinerary
                    </div>

                    <div className="col-sm-4">
                        <button className="btn btn-sm btn-dark btn-block btnToggle"
                                data-toggle="collapse" data-target="#busItineraryCollapse"
                                aria-expanded="false" aria-controls="collapseExample">Toggle
                        </button>
                    </div>
                </div>
            </div>

            <div className="card-body" id="busItineraryCollapse">
                {segments}
            </div>
        </div>
    )
};

export default BusItinerary;
