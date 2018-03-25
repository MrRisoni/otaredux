import React from 'react';
import BagLeg from "./BagLeg";
import BlueRibbon from '../BlueRibbon';


const BagComponent = function (props) {



    return (

        <div>

            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-success" role="alert">

                        <div className="row">
                            <div className="col-md-6">
                                Purchase Bags!
                            </div>
                            <div className="col-md-2">
                                <i className="fas fa-suitcase"/>
                            </div>

                            <div className="col-md-2">
                                <button className="btn btn-sm btn-dark btn-block btnToggle"
                                        data-toggle="collapse"
                                        data-target={`#bagCollapse${props.paxId}`}
                                        aria-expanded="false" aria-controls="collapseExample">
                                    Toggle
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="collapse" id={`bagCollapse${props.paxId}`}>

                <div className="row">

                    <div className="col-md-6">
                        <BagLeg key={0} leg={0}
                                legTitle="Departure"
                                bagsAir={props.bagsAir}
                                purchasedBags={props.purchasedBags}
                                currency={props.currency}
                                paxId={props.paxId}
                                addBagHandler={props.addBagHandler}
                                removeBagHandler={props.removeBagHandler}/>
                    </div>

                    <div className="col-md-6">
                        <BagLeg key={1} leg={1}
                                legTitle="Return"
                                bagsAir={props.bagsAir}
                                purchasedBags={props.purchasedBags}
                                currency={props.currency}
                                paxId={props.paxId}
                                addBagHandler={props.addBagHandler}
                                removeBagHandler={props.removeBagHandler}/>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default BagComponent;
