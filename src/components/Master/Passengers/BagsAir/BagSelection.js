import React, {Component} from 'react';

class BagSelection extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(' bag click');
    }

    render() {

        let bagCount =0; // bag count for this passenger
        console.log('purchased bag for this pax '+ this.props.paxId);
        console.log(this.props.purchasedBags);

        this.props.purchasedBags.forEach((purchasedBag) => {
            if (purchasedBag.paxId === this.props.paxId) {
                if (purchasedBag.bagId === this.props.bagData.id) {
                    if (purchasedBag.legId === this.props.legId) {
                        bagCount++;
                    }
                }
            }
        });

        return (
            <div className="row">
                <div className="col-md-8">

                    {bagCount}

                    <button onClick={this.handleClick}
                            className="btn-primary btn btnPlusMinusBags">+
                    </button>

                    <button onClick={this.handleClick}
                            className="btn-danger btn btnPlusMinusBags">-
                    </button>
                    {this.props.bagData.weight} {this.props.bagData.price.toFixed(2)} {this.props.currency.code}

                </div>
            </div>);
    }
}


export default BagSelection;
