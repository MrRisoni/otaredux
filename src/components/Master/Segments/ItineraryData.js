import React from 'react';
import { Translate } from 'react-redux-i18n';
import Leg from './Leg';

const ItineraryData = (props) => {
  const legsDiv = [<Leg key="dep" legId={0} data={props.tripData[0]} />];

  if (props.tripData.length > 1) {
    legsDiv.push(<Leg key="ret" legId={1} data={props.tripData[1]} />);
  }


  return (
    <div className="segmentsList">

      <div className="alert alert-primary" role="alert">
        <div className="row">
          <div className="col-3">

              <Translate value="flight.YourTrip"/>
          </div>

          <div className="col-2 offset-7">
            <button
              className="btn btn-sm btn-dark btn-block btnToggle"
              data-toggle="collapse"
              data-target=".legsCollapse"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <Translate value="general.Toggle" />
            </button>
          </div>

        </div>
      </div>

      {legsDiv}


    </div>
  );
};

export default ItineraryData;
