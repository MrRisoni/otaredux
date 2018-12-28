import React, { Component } from 'react';
import { Translate } from 'react-redux-i18n';
import SingleMilesCard from './SingleMilesCard';


class MilesCards extends Component {
  render() {
    return (
      <section>

        <br />
        <div className="alert alert-info" role="alert">

          <div className="row">


            <div className="col-6">

                            Have you got miles card for your trip?
            </div>
            <div className="col-2">
              <i className="fas fa-address-card" />
            </div>


            <div className="col-2">
              <button
                className="btn btn-sm btn-dark btn-block btnToggle"
                data-toggle="collapse"
                data-target={`#milesCardsDivCollapse${this.props.paxId}`}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <Translate value="general.Toggle" />
              </button>
            </div>

          </div>


        </div>


        <div className="collapse" id={`milesCardsDivCollapse${this.props.paxId}`}>

          {this.props.carrierList.map((obj, idx) => (<SingleMilesCard key={idx} data={obj} />))}
        </div>


      </section>

    );
  }
}

export default MilesCards;
