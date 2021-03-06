import React from "react";
import Leg from "./Leg";
import ButtonToggle from "../../Common/ButtonToggle";

const ItineraryData = props => {
  const legsDiv = [<Leg key="dep" 
  legId={0} 
  data={props.tripData[0]} 
  translations={props.translations}
  translGeneral={props.translGeneral} />];
  
  if (props.tripData.length > 1) {
    legsDiv.push(<Leg key="ret" legId={1} data={props.tripData[1]} 
    translGeneral={props.translGeneral}
    translations={props.translations} />);
  }

  return (
    <div className="segmentsList">
      <div className="alert alert-primary" role="alert">
        <div className="row">
          <div className="col-3">{props.translations.YourTrip}</div>

          <ButtonToggle
                    target={`TripCollapse`}
                    clsName={"offset-7"}
                  />

          
        </div>
      </div>

      <div className="show" id="TripCollapse">
        {legsDiv}
      </div>
    </div>
  );
};

export default ItineraryData;
