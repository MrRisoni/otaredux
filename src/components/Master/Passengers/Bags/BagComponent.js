import React from 'react';
import BagLeg from './BagLeg';


const BagComponent = props => {
    const keys = [0, 1];
    console.log('BagComponent');
    console.log(props);
    // cabinSelection={props.cabinSelection} paxId
    // paxData.paxId
    // getBagsLimit
    let limitBags = 0;
    const thisPaxCabins = props.cabinSelection.filter(cb => cb.paxId == props.paxData.id);
    console.log('thisPaxCabins');
    console.log(thisPaxCabins);
    let bestCabin  = '';
    thisPaxCabins.forEach(sg => {
        const thisClassLimit = props.getBagsLimit.filter(lim => lim.cabin == sg.cabin)[0].limit;
        if (thisClassLimit > limitBags) {
            limitBags = thisClassLimit;
            bestCabin = sg.cabin;
        }
    });

    let  allowedBags = props.bagsAir.filter(bg => bg.classes.indexOf(bestCabin) > -1).map(itm => itm.key);
    console.log('filter bags');
    console.log(allowedBags);

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
                                <button
                                    className="btn btn-sm btn-dark btn-block btnToggle"
                                    data-toggle="collapse"
                                    data-target={`#bagCollapse${props.paxId}`}
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                >

                                    Toggle
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="collapse" id={`bagCollapse${props.paxId}`}>

                {keys.map(kk => {
                    return (
                        <div className="row bagLegDiv">
                            <div className="col-10 offset-1">
                                <BagLeg
                                    key={kk}
                                    leg={kk}
                                    limitBags={limitBags}
                                    bagsAir={props.bagsAir}
                                    allowedBags={allowedBags}
                                    purchasedBags={props.purchasedBags}
                                    cabinSelection={props.cabinSelection}
                                    currency={props.currency}
                                    paxData={props.paxData}
                                    paxId={props.paxId}
                                    addBagHandler={props.addBagHandler}
                                    removeBagHandler={props.removeBagHandler}
                                />
                            </div>
                        </div>);
                })}


            </div>

        </div>)
}

export default BagComponent;
