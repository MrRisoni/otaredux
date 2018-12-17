import React from 'react';

const CabinTrip = (props) => {
    return (
        <section>



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



        </section>
    )
};

export default CabinTrip;
