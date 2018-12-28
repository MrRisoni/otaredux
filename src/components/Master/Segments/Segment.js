import React from 'react';
import Airport from './Airport'
import { Translate } from 'react-redux-i18n';


const Segment = (props) => {
    return (
        <div className="segments">

            <div className="card">
                <div className="card-header bg-info">

                    <Translate value="flight.Segment"/> #{props.data.segId}</div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-2">
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

                        <div className="col-5">
                            <Translate value="flight.Duration"/>  {props.data.durationTime.hours}h {props.data.durationTime.minutes}m
                        </div>

                        {props.data.waitTime.total > 0 ? (
                            <div className="col-5">
                                <Translate value="flight.WaitTime"/>  {props.data.waitTime.hours}h {props.data.waitTime.minutes}m
                            </div>
                        ) : (<div className="col-5"></div>)}

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Segment;
