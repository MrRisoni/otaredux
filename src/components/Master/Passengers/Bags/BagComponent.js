import React from 'react';
import BagLeg from './BagLeg';


const BagComponent = (props) => {



    return (

        <div>

            <div className="row">
                <div className="col-12">
                    <div className="alert alert-success" role="alert">

                        <div className="row">
                            <div className="col-6">
                                Purchase Bags!
                            </div>
                            <div className="col-2">
                                <i className="fas fa-suitcase"/>
                            </div>

                            <div className="col-2">
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

                    <div className="col-6">
                        <BagLeg key={0} leg={0}
                                legTitle="Departure"
                                bagsAir={props.bagsAir}
                                purchasedBags={props.purchasedBags}
                                currency={props.currency}
                                paxData={props.paxData}
                                paxId={props.paxId}
                                addBagHandler={props.addBagHandler}
                                removeBagHandler={props.removeBagHandler}/>
                    </div>

                    <div className="col-6">
                        <BagLeg key={1} leg={1}
                                legTitle="Return"
                                bagsAir={props.bagsAir}
                                purchasedBags={props.purchasedBags}
                                currency={props.currency}
                                paxData={props.paxData}
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
