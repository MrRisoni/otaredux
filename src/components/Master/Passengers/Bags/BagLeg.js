import React from 'react';
import BagSelection from './BagSelection';
import MasterPassenger from '../MasterPassenger';

const BagLeg = (props) => {
  const legTitle = (props.leg == 0) ? 'Departure' : 'Return';


  return (
    <div className="row">
      <div className="col-12">

        <div className="card">
          <div className="card-header">
            {legTitle}
            {' '}
(Max
            {props.limitBags}
)
          </div>
          <div className="card-body">
            {props.bagsAir.filter(bg => props.allowedBags.indexOf(bg.key) > -1).map(
              bgItem => (
                <BagSelection
                  bagData={bgItem}
                  key={bgItem.key}
                  legId={props.leg}
                  currency={props.currency}
                  purchasedBags={props.purchasedBags}
                  paxId={props.paxId}
                  limitBags={props.limitBags}
                  addBagHandler={props.addBagHandler}
                  removeBagHandler={props.removeBagHandler}
                />
              ),
            )}

          </div>
        </div>
      </div>
    </div>

  );
};

export default BagLeg;
