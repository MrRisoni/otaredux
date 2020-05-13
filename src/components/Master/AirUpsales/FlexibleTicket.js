import React, {Component} from 'react';
import {DataContext} from "../../OtaContext";
import ButtonToggle from "../../Common/ButtonToggle";


class FlexibleTicket extends Component {
    static contextType = DataContext

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        if (ev.target.value == 1) {
            this.props.addFlexibleTicketHandler();
        } else {
            this.props.removeFlexTicketHandler();
        }
    }

    render() {
        let price = this.context.upsalesPricing.flexTicket * this.context.currentCurrency.rate * (this.context.numADT + this.context.numCNN);
        price = price.toFixed(2);

        return (
            <section className="upsalesSection">

                <div className="row">
                    <div className="col-8">

                        <div className="card">
                            <div className="card-header bg-light">

                                <div className="row">

                                    <div className="col-3">

                                        Flexible Ticket
                                    </div>

                                    <ButtonToggle target="flexibleTicketCollapse"
                                                  clsName={"offset-6"}/>

                                </div>
                            </div>


                            <div className="card-body collapse" id="flexibleTicketCollapse">

                                <div className="row">
                                    <div className="col-8">

                                        Pay
                                        {' '}
                                        {price}
                                        {' '}
                                        {this.context.currentCurrency.code}
                                        {' '}
                                        and you may
                                        cancel/amend your ticket for free!
                                    </div>

                                    <div className="col-3">

                                        <select className="form-control" onChange={this.handleClick}>
                                            <option key="no" value="0">No thanks</option>
                                            <option key="yes" value="1">Yes please</option>
                                        </select>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </section>
        );
    }
}


export default FlexibleTicket;
