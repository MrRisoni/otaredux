import React, {Component} from 'react';

class BlueRibbon extends Component {
    constructor(props)
    {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(ev)
    {
        console.log(ev.target.value);
        this.props.changeBlueRibbonHandler( (ev.target.value ==1) );
    }

    render() {
        const price = (this.props.paxes * this.props.blueRibbonPrices.pricePerPax).toFixed(2);


        return (
            <div className="row contactDetails">
                <div className="col-md-12">

                    <div className="card">
                        <div className="card-header bg-light">

                            <div className="row">

                                <div className="col-sm-3">
                                    Buy Blue Ribbon Bag Insurance!
                                </div>

                                <div className="col-sm-2 offset-sm-6">
                                    <button className="btn btn-sm btn-dark btn-block btnToggle"
                                            data-toggle="collapse"
                                            data-target="#blueRibbonCollapse" aria-expanded="false"
                                            aria-controls="collapseExample">
                                        Toggle
                                    </button>
                                </div>

                            </div>
                        </div>


                        <div className="card-body collapse show" id="blueRibbonCollapse">

                            <div className="row">
                                <div className="col-md-8">
                                    Pay {price} {this.props.currency.code} and you
                                    will receive {this.props.currency.code} reimbursement for each lost baggage
                                </div>

                                <div className="col-md-3">

                                    <select className="form-control" onChange={this.handleSelection}>
                                        <option key="no" value="0">No thanks</option>
                                        <option key="yes" value="1">Yes please</option>
                                    </select>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

        );
    }
}

export default BlueRibbon;


