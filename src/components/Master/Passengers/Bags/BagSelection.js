import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as actsBags from '../../../../actions/master/actionsBags';


class BagSelection extends Component {
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

    this.props.purchasedBags.forEach((purchasedBag) => {
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

    this.props.purchasedBags.forEach((purchasedBag) => {
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

          {this.props.bagData.weight}
          {' '}
          {(this.props.bagData.price * this.props.currency.rate).toFixed(2)}
          {' '}
          {this.props.currency.code}

        </div>
        <div className="col-2">


                     x
          {this.getBagCount()}
        </div>
      </div>);
  }
}


function mapStateToProps(state) {
  return {
    currency: state.currentCurrencyReducer,
    purchasedBags: state.purchasedBagsReducer,

  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({

    addBagHandler: actsBags.addAirBagAction,
    removeBagHandler: actsBags.removeAirBagAction,
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(BagSelection);
