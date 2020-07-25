import React, {Component} from 'react';
import MasterPassenger from './MasterPassenger';
import {DataContext} from "../../OtaContext";


class MasterPassengerList extends Component {
    static contextType = DataContext;

    constructor(props) {
        super(props);
        this.addPaxHandler = this.addPaxHandler.bind(this);
    }

    addPaxHandler()
    {
        this.context.functions.addPassenger();
    }
    render() {

        return (
            <section>

                <div className="busPassengerList">

                    <div className="alert alert-primary" role="alert">
                        <div className="row">
                            <div className="col-3">

                                FillThePassengerData
                            </div>

                            <div className="col-2 offset-7">
                                <button
                                    className="btn btn-sm btn-dark btn-block btnToggle"
                                    data-toggle="collapse"
                                    data-target=".passengerListCollapse"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                >
                                    Toggle
                                </button>
                            </div>
                        </div>
                    </div>


                    {this.context.passengers.filter(pxItem => (pxItem.active == true)).map(pax => (
                        <MasterPassenger
                            key={pax.id}
                            passenger={pax}
                        />))}

                    <div className="row addOnePassenger show passengerListCollapse">
                        <div className="col-4 offset-4">
                            <button className="btn btn-primary btn-success" onClick={this.addPaxHandler}>
                                {this.context.translations[this.context.lang].passengers.AddPassenger}
                            </button>
                        </div>
                    </div>

                </div>
            </section>);
    }
}

export default MasterPassengerList;
