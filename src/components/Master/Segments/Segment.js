import React from 'react';
import {Translate} from 'react-redux-i18n';
import Airport from './Airport';


const Segment = props => (
    <div className="segments">

        <div className="card">
            <div className="card-header bg-info">

                <Translate value="flight.Segment"/>
                {' '}

                #
                {props.data.segId}
            </div>

            <div className="card-body">

                <div className="row">
                    <div className="col-2">
                        <img
                            width={props.data.img.width}
                            src={props.data.img.url}
                        />
                    </div>


                    <Airport
                        iata={props.data.from.iata}
                        city={props.data.from.city}
                        name={props.data.from.name}
                        flyTime={props.data.from.flyTime}
                        flyTimeGMT={props.data.from.flyTimeGMT}
                        day={props.data.from.day}
                        date={props.data.from.date}
                    />

                    <Airport
                        iata={props.data.to.iata}
                        city={props.data.to.city}
                        name={props.data.to.name}
                        flyTime={props.data.to.flyTime}
                        flyTimeGMT={props.data.to.flyTimeGMT}
                        day={props.data.to.day}
                        date={props.data.to.date}
                    />

                </div>
            </div>


            <div className="card-footer">
                <div className="row">

                    <div className="col-5 offset-4">
                        <Translate value="flight.Duration"/>
                        {' '}
                        {props.data.durationTime.hours}

                        h
                        {' '}
                        {props.data.durationTime.minutes}

                        m
                    </div>
                </div>
            </div>

        </div>


        {props.data.waitTime.total > 0 ? (
            <div className="card text-white bg-dark waitSeg">
                <div className="card-header">
                    Waiting time {' '}
                    {props.data.waitTime.hours}
                    h
                    {' '}
                    {props.data.waitTime.minutes}
                    m
                </div>
            </div>
        ) : (<section></section>)}


    </div>
);

export default Segment;
