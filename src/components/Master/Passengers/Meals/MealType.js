import React from 'react';
import MealSelection from './MealSelection';

const MealType = (props) => {


  return (
    <div className="row">
      <div className="col-7 offset-2">
        <div className="card text-white bg-info mb-3">
          <div className="card-header">{props.type}</div>
          <div className="card-body">


            <MealSelection
              mealData={props.data}
              type={props.type}
              legId={props.legId}
              paxData={props.paxData}
              paxId={props.paxId}
              segId={props.segId}
            />


          </div>
        </div>
      </div>
    </div>
  );
};

export default MealType;
