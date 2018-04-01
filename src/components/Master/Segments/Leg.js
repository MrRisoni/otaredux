import React from 'react';
import Port from './Port';

const Leg = function (props) {
    return (
        <div className="Leg">
            <div className="card  bg-light mb-3 border-primary mb-3">

                <div className="card-header">
                    <div className="row">
                        <div className="col-md-2">

                        </div>

                        <div className="col-md-2 offset-md-8">
                            <button className="btn btn-sm btn-dark btn-block btnToggle"
                                    data-toggle="collapse"
                                    data-target={`#legCollapse${props.data.legId}`} aria-expanded="false"
                                    aria-controls="collapseExample">
                                Toggle
                            </button>
                        </div>
                    </div>

                </div>



                <div className="card-body show" id={`legCollapse${props.data.legId}`}>

                    <div className="row">


                        <Port iata={props.data.from.iata}
                                 city={props.data.from.city}
                                 name={props.data.from.name}
                                 flyTime={props.data.from.flyTime}
                                 flyTimeGMT={props.data.from.flyTimeGMT}
                                 day={props.data.from.day}
                                 date={props.data.from.date}/>

                        <Port iata={props.data.from.iata}
                              city={props.data.from.city}
                              name={props.data.from.name}
                              flyTime={props.data.from.flyTime}
                              flyTimeGMT={props.data.from.flyTimeGMT}
                              day={props.data.from.day}
                              date={props.data.from.date}/>



                        <div className="col-md-2">
                            <button className="btn btn-sm btn-primary"
                                    data-toggle="collapse" data-target={`#segmentsCollapse${props.data.legId}`} aria-expanded="false" aria-controls="collapseExample">
                                Expand
                            </button>
                        </div>

                    </div>


                    <br/>


                    <div className="row">

                        <div className="col-md-4">
                            Stops: {props.data.stops}
                        </div>

                        <div className="col-md-4">
                            Duration: {props.data.duration.h}h {props.data.duration.m}m
                        </div>

                        <div className="col-md-4">
                            Wait time: {props.data.waiting.h}h {props.data.waiting.m}m
                        </div>
                    </div>


                    <div className="collapse" id={`segmentsCollapse${props.data.legId}`}>
                        segmentsDiv
                    </div>

                </div>

            </div>
        </div>

                )
};

export default Leg;
