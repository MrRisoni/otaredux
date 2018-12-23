import React, {Component} from 'react';

class BagSelection extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

    }

    handleClick() {
        this.props.addBagHandler({
            paxId : this.props.paxId,
            bagId: this.props.bagData.id,
            legId: this.props.legId
        })
    }


    handleRemove() {
        this.props.removeBagHandler({
            paxId : this.props.paxId,
            bagId: this.props.bagData.id,
            legId: this.props.legId
        })
    }

    render() {

        let bagCount =0; // bag count for this passenger

        this.props.purchasedBags.forEach( purchasedBag => {
            if (purchasedBag.bagId === this.props.bagData.id) {
                if (purchasedBag.legId === this.props.legId) {
                    bagCount++;
                }
            }
        });

        return (
            <div className="row">
                <div className="col-6">

                    <button onClick={this.handleClick}
                            className="btn-primary btn btnPlusMinusBags">+
                    </button>

                    <button onClick={this.handleRemove}
                            className="btn-danger btn btnPlusMinusBags">-
                    </button>
                    {this.props.bagData.weight} {this.props.bagData.price.toFixed(2)} {this.props.currency.code}

                </div>
                <div className="col-2">
                     x {bagCount}
                </div>
            </div>);
    }
}


export default BagSelection;
