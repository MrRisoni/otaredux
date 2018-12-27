import React, { Component } from 'react';
import SeatShower from './display/SeatShower';
import SeatRow from './seats/SeatRow';
import {fillRange} from '../../../helpers';

import './preseat.css';

class Preseat extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const maxRows = this.props.seatMapInfo.filter(segInfo => segInfo.segId === this.props.preSeatSelectedItems.selectedSegment)[0].airplaneRows;
        let rowArray =  fillRange(1, maxRows);


        return (<section id="preSeat">
            <div className="row">
                <div className="col-8">
                    <div className="alert alert-primary" role="alert">
                        <div className="row">
                            <div className="col-5">
                                Select your seats
                            </div>

                            <div className="col-4">
                                <button className="btn btn-sm btn-warning"> Reset</button>
                            </div>

                            <div className="col-3">
                                <button className="btn btn-sm btn-dark btnToggle"
                                        data-toggle="collapse"
                                        data-target="#preseatComponents">
                                    Toggle
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div id="preseatComponents" className="show">

                <SeatShower  passengers={this.props.passengers}
                             segments={this.props.segments}
                             preSeatSelectedItems={this.props.preSeatSelectedItems}
                             seatMapInfo={this.props.seatMapInfo}
                             cabinSelection={this.props.cabinSelection}
                             selectedSeats={this.props.selectedSeats}
                             currency={this.props.currency}
                ></SeatShower>

                <section id="seatRowsElement">
                    {rowArray.map(ri => {
                        return (<SeatRow key={ri}
                                         cabinSelection={this.props.cabinSelection}
                                         preSeatSelectedItems={this.props.preSeatSelectedItems}
                                         passengers={this.props.passengers}
                                         pickSeatHandler={this.props.pickSeatHandler}
                                         rowId={ri}></SeatRow>)
                    })}


                </section>
            </div>


        </section>)


    }
}


export default Preseat;


