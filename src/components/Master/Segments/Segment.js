import React from 'react';

const Segment = function (props) {
    return (
        <div className="segments">

            <div className="card">
                <div className="card-header bg-info">Segment #{this.props.segIndex}</div>
                <div className="card-body">

                    <div className="row">
                        <div className="col-md-2">
                            <img width={obj.img.width}
                                 src={obj.img.url} />
                        </div>


                        <Airport iata={obj.depIATA}
                                 city={obj.fromCity}
                                 name={obj.depAirport}
                                 flyTime={obj.depTime}
                                 flyTimeGMT={obj.depTimeGMT}
                                 day={obj.depDay}
                                 date={obj.depDate}/>

                        <Airport iata={obj.arrIATA}
                                 city={obj.toCity}
                                 name={obj.arrAirport}
                                 flyTime={obj.arrTime}
                                 flyTimeGMT={obj.arrTimeGMT}
                                 day={obj.arrDay}
                                 date={obj.arrDate}/>

                    </div>


                </div>


                <div className="card-footer">
                    <div className="row">

                        <div className="col-md-5">
                            Duration {this.props.segData.durationTime.hours}h {this.props.segData.durationTime.minutes}m
                        </div>


                        {positiveWaitTime ? (
                            <div className="col-md-5">
                                Wait time {this.props.segData.waitTime.hours}h {this.props.segData.waitTime.minutes}m
                            </div>
                        ) : (<div className="col-md-5"></div>)}

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Segment;
