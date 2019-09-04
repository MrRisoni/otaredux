import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import BagLeg from './BagLeg';

class BagComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const keys = [0, 1];


    const thisPaxCabins = this.props.cabinSelection.filter(cb => cb.paxId == this.props.paxData.id);

    const mrktCarriersList = Array.prototype.concat.apply([], this.props.trip.map(legs => legs.segments)).map(sgx => sgx.mrktCarrier);

    const limitsArray = [];
    for (let cbn = 0; cbn < thisPaxCabins.length; cbn++) {
      const carrierSeg = mrktCarriersList[cbn];

      const thisClassCarrierLimit = this.props.getBagsLimit.filter(lim => (lim.cabin == thisPaxCabins[cbn].cabin && lim.airline == mrktCarriersList[cbn]))[0].limit;
      limitsArray.push(thisClassCarrierLimit);
    }
    console.log(limitsArray);
    const limitBags = Math.min.apply(Math, limitsArray);


    let bestCabin = ''; // most restrivice cabin
    thisPaxCabins.forEach((sg) => {
      const thisClassLimit = this.props.getBagsLimit.filter(lim => lim.cabin == sg.cabin)[0].limit;
        bestCabin = sg.cabin;

    });


    const allowedBags = this.props.bagsAir.filter(bg => bg.classes.indexOf(bestCabin) > -1).map(itm => itm.key);

    return (
      <section>

        <div className="row">
          <div className="col-12">
            <div className="alert alert-success" role="alert">

              <div className="row">
                <div className="col-6">

                  <Translate value="upsales.PurchaseBags" />
                </div>
                <div className="col-2">
                  <i className="fas fa-suitcase" />
                </div>

                <div className="col-2">
                  <button
                    className="btn btn-sm btn-dark btn-block btnToggle"
                    data-toggle="collapse"
                    data-target={`#bagCollapse${this.props.paxId}`}
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >

                    <Translate value="general.Toggle" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="collapse" id={`bagCollapse${this.props.paxId}`}>

          {keys.map(kk => (
            <div className="row bagLegDiv">
              <div className="col-10 offset-1">
                <BagLeg
                  key={kk}
                  leg={kk}
                  limitBags={limitBags}
                  allowedBags={allowedBags}
                  paxData={this.props.paxData}
                  paxId={this.props.paxId}
                />
              </div>
            </div>))}


        </div>

      </section>);
  }
}


function mapStateToProps(state) {
  return {
    bagsAir: state.getBagsReducer,
    getBagsLimit: state.getLimitBagReducer,
    cabinSelection: state.fetchCabinPaxPerSegmentReducer,
    trip: state.airTripReducer,

  };
}


export default connect(mapStateToProps)(BagComponent);
