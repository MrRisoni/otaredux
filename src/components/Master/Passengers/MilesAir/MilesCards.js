import React, {Component} from 'react';
import SingleMilesCard from './SingleMilesCard';

class MilesCards extends Component {

    render() {

        return (
            <div>
                <br/>
                <div className="alert alert-info" role="alert">

                    <div className="row">


                        <div className="col-md-6">
                            Have you got miles card for your trip?
                        </div>
                        <div className="col-md-2">
                            <i className="fas fa-address-card"/>
                        </div>


                        <div className="col-md-2">
                            <button className="btn btn-sm btn-dark btn-block btnToggle"
                                    data-toggle="collapse"
                                    data-target={`#milesCardsDivCollapse${this.props.paxId}`}
                                    aria-expanded="false" aria-controls="collapseExample">
                                Toggle
                            </button>
                        </div>

                    </div>


                </div>


                <div className="collapse" id={`milesCardsDivCollapse${this.props.paxId}`}>

                    {this.props.carrierList.map((obj, idx) => {
                        return (<SingleMilesCard key={idx} data={obj}/>)
                    })}
                </div>


            </div>

        );
    }
}

export default MilesCards;


