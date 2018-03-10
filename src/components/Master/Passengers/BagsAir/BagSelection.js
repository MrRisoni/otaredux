import React, {Component} from 'react';

class BagSelection extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

    }

    handleClick() {
        console.log(' bag click '  + this.props.paxId + ' ' + this.props.bagData.id + ' ' + this.props.legId);
        this.props.addBagHandler({
            paxId : this.props.paxId,
            bagId: this.props.bagData.id,
            legId: this.props.legId
        })
    }


    handleRemove() {
        console.log(' bag click '  + this.props.paxId + ' ' + this.props.bagData.id + ' ' + this.props.legId);
        this.props.removeBagHandler({
            paxId : this.props.paxId,
            bagId: this.props.bagData.id,
            legId: this.props.legId
        })
    }

    render() {

        let bagCount =0; // bag count for this passenger
        console.log('purchased bag for this pax '+ this.props.paxId);
        console.log(this.props.purchasedBags);

        this.props.purchasedBags.forEach((purchasedBag) => {
            if (purchasedBag.bagId === this.props.bagData.id) {
                if (purchasedBag.legId === this.props.legId) {
                    bagCount++;
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

                    <button onClick={this.handleRemove}
                            className="btn-danger btn btnPlusMinusBags">-
                    </button>
                    {this.props.bagData.weight} {this.props.bagData.price.toFixed(2)} {this.props.currency.code}

                </div>
            </div>);
    }
}


export default BagSelection;
