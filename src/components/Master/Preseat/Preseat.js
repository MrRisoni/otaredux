import React, {Component} from 'react';
import SeatColumn from './SeatColumn';

import FontAwesome from 'react-fontawesome';
import SeatShow from './SeatShow';



class Preseat extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPaxID:0
        };

    }


    render() {

        let ColHeaders = [];

        const alphabet = ['A', 'B', 'C'];


        for (let sc = 0; sc < 3; sc++) {

            let colHeaderKey = 'keyColH' + alphabet[sc];

            let colRowsContainers = 'keyRowsCon' + alphabet[sc];

            ColHeaders.push(<div className="col-md-3 seatLetterGroup" key={colHeaderKey}>
                <div className="card">
                    <div className="card-header seatRowHeader">
                        <p><b>{alphabet[sc]}</b></p>
                    </div>
                    <div className="card-body">
                        {/*  // how many columns in the aircraft fuselage */}
                        <div className="row">
                            <SeatColumn key={colRowsContainers}
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
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header  bg-info">Select your Seat</div>
                        <div className="card-body">


                            <SeatShow passengers={this.props.passengers}/>

                            <div className="row preSeatPaxSelector">

                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header  bg-primary">Select Passenger</div>
                                        <div className="card-body">

                                            <button className="btn btn-sm btn-success" onClick={this.handlePrevPax}>
                                                <FontAwesome
                                                    className='fa fa-backward'
                                                    name='forward'
                                                    size='lg'
                                                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                                />
                                            </button>


                                            <button className="btn btn-sm btn-success" onClick={this.handleNextPax}>
                                                <FontAwesome
                                                    className='fa fa-forward'
                                                    name='forward'
                                                    size='lg'
                                                    style={{textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}}
                                                />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                {ColHeaders}
                            </div>


                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Preseat;


