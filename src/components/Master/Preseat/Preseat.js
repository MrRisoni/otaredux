import React, {Component} from 'react';
import SeatShower from './display/SeatShower';
import SeatRow from './seats/SeatRow';

import './preseat.css';
import SeatColumn from "./seats/SeatColumn";

class Preseat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPaxID: 0
        };

    }

    render() {

        const maxRows = this.props.seatMapInfo.filter(segInfo => segInfo.segId === this.props.preSeatSelectedItems.selectedSegment)[0].airplaneRows;

        let seatRowDiv = [];
        for (let i = 1; i < maxRows; i++) {
            seatRowDiv.push(<SeatRow key={i}
                                     cabinSelection={this.props.cabinSelection}
                                     passengers={this.props.passengers}
                                     rowId={i}></SeatRow>)
        }


        return (<section id="preSeat">
            <div className='row'>
                <div className='col-8'>
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
                             cabinSelection={this.props.cabinSelection}
                             currency={this.props.currency}
                ></SeatShower>

                <section id="seatRowsElement">
                    {seatRowDiv}
                </section>
            </div>


        </section>)


    }
}


export default Preseat;


