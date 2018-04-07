import React from 'react';
import Airport from './Airport'

const Segment = function (props) {
    return (
        <div className="segments">

            <div className="card">
                <div className="card-header bg-info">Segment #{props.data.segId}</div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-md-2">
                            <img width={props.data.img.width}
                                 src={props.data.img.url}/>
                        </div>


                        <Airport product={props.product}
                                 iata={props.data.from.iata}
                                 city={props.data.from.city}
                                 name={props.data.from.name}
                                 flyTime={props.data.from.flyTime}
                                 flyTimeGMT={props.data.from.flyTimeGMT}
                                 day={props.data.from.day}
                                 date={props.data.from.date}/>

                        <Airport product={props.product}
                                 iata={props.data.from.iata}
                                 city={props.data.from.city}
                                 name={props.data.from.name}
                                 flyTime={props.data.from.flyTime}
                                 flyTimeGMT={props.data.from.flyTimeGMT}
                                 day={props.data.from.day}
                                 date={props.data.from.date}/>

                    </div>
                </div>


                <div className="card-footer">
                    <div className="row">

                        <div className="col-md-5">
                            Duration {props.data.durationTime.hours}h {props.data.durationTime.minutes}m
                        </div>

                        {props.data.waitTime.total > 0 ? (
                            <div className="col-md-5">
                                Wait time {props.data.waitTime.hours}h {props.data.waitTime.minutes}m
                            </div>
                        ) : (<div className="col-md-5"></div>)}

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Segment;
