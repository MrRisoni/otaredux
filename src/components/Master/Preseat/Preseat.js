import React, {Component} from 'react';
import SeatShower from './display/SeatShower';
import SeatRow from './seats/SeatRow';

import './preseat.css';

class Preseat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPaxID: 0
        };

    }

    /*
        render() {

            let ColHeaders = [];

            const alphabet = ['A', 'B', 'C'];


            for (let sc = 0; sc < 3; sc++) {

                let colHeaderKey = 'keyColH' + alphabet[sc];

                let colRowsContainers = 'keyRowsCon' + alphabet[sc];

                ColHeaders.push(<div className="col-3 seatLetterGroup" key={colHeaderKey}>
                    <div className="card">
                        <div className="card-header seatRowHeader">
                            <p><b>{alphabet[sc]}</b></p>
                        </div>
                        <div className="card-body">
                             // how many columns in the aircraft fuselage *
                            <div className="row">
                                <SeatColumn key={colRowsContainers}
                                            passengers={this.props.passengers}
                                            seatMap={this.props.seatMap}
                                            preseatSelectedPax={this.props.preseatSelectedPax}
                                            selectSeatHandler={this.props.selectSeatHandler}
                                            colNo={sc}
                                            colLetter={alphabet[sc]}/>
                            </div>
                        </div>
                    </div>
                </div>)
            }

            return (


                <div className="row contactDetails">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header  bg-info">Select your Seat</div>
                            <div className="card-body">

                                <SeatShow passengers={this.props.passengers}
                                          changePreSeatSelectPassengerHandler={this.props.changePreSeatSelectPassengerHandler}
                                          preseatSelectedPax={this.props.preseatSelectedPax}
                                />

                                <div className="row">
                                    {ColHeaders}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>);
        } */

    render() {


        const maxRows = this.props.seatMapInfo.filter(segInfo => segInfo.segId === this.props.preSeatSelectedItems.selectedSegment)[0].airplaneRows;

        let seatRowDiv = [];
        for (let i = 0; i < maxRows; i++) {
            seatRowDiv.push(<SeatRow key={i} rowId={i}></SeatRow>)
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


            <div id="preseatComponents">

                <SeatShower></SeatShower>

                {seatRowDiv}

            </div>


        </section>)


    }
}


export default Preseat;


