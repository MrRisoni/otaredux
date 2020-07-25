import React, { Component } from 'react';
import {DataContext} from "../../../OtaContext";


class BagSelection extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  checkLimit() {
    if (this.getTotalBagCount() === this.props.limitBags) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  }

  handleClick() {
    const bgCount = this.getTotalBagCount();
    if ((bgCount + 1) <= this.props.limitBags) {
      this.props.addBagHandler({
        paxId: this.props.paxId,
        bagId: this.props.bagData.id,
        legId: this.props.legId,
      });
    }
    this.checkLimit();
  }


  handleRemove() {
    this.props.removeBagHandler({
      paxId: this.props.paxId,
      bagId: this.props.bagData.id,
      legId: this.props.legId,
    });

    this.checkLimit();
  }


  getTotalBagCount() {
    let bagCountTotal = 0;

    this.props.purchasedBags.forEach(purchasedBag => {
      if (purchasedBag.legId === this.props.legId) {
        if (purchasedBag.paxId === this.props.paxId) {
          bagCountTotal++;
        }
      }
    });

    return bagCountTotal;
  }

  getBagCount() {
    let bagCount = 0; // bag count for this passenger ,leg and bag

    this.props.purchasedBags.forEach(purchasedBag => {
      if (purchasedBag.bagId === this.props.bagData.id) {
        if (purchasedBag.legId === this.props.legId) {
          if (purchasedBag.paxId === this.props.paxId) {
            bagCount++;
          }
        }
      }
    });

    return bagCount;
  }

  render() {
    console.log('bag data');
    console.log(this.props.bagData);
    let priceEur = this.props.bagData.pricing.filter(prc => prc.age==this.props.ptc)[0].costEur;
    
    return (
      <div className="row">
        <div className="col-6">

          <button
            onClick={this.handleClick}
            disabled={false}
            className="btn-primary btn btnPlusMinusBags"
          >

+
          </button>

          <button
            onClick={this.handleRemove}
            className="btn-danger btn btnPlusMinusBags"
          >

-
          </button>

      
          {(priceEur * this.context.currentCurrency.rate).toFixed(2)}
          {' '}
          {this.context.currentCurrency.code}

        </div>
        <div className="col-2">


                     x
          {}
        </div>
      </div>);
  }
}



export default BagSelection;
