import React, {Component} from 'react';
import {Translate} from "react-redux-i18n";

class LoungeAccess extends Component {
    render() {
        return (
            <section>

                <div className="row contactDetails">
                    <div className="col-8">

                        <div className="card">
                            <div className="card-header bg-light">

                                <div className="row">

                                    <div className="col-6">


                                        Get Airport Lounge Access!
                                    </div>

                                    <div className="col-2 offset-3">
                                        <button
                                            className="btn btn-sm btn-dark btn-block btnToggle"
                                            data-toggle="collapse"
                                            data-target="#blueRibbonCollapse"
                                            aria-expanded="false"
                                            aria-controls="collapseExample"
                                        >


                                            <Translate value="general.Toggle"/>
                                        </button>
                                    </div>

                                </div>
                            </div>


                            <div className="card-body collapse show" id="blueRibbonCollapse">

                                <div className="row">
                                    <div className="col-8">



                                    </div>

                                    <div className="col-3">

                                        <select className="form-control" onChange={this.handleSelection}>
                                            <option key="no" value="0">No thanks</option>
                                            <option key="yes" value="1">Yes please</option>
                                        </select>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </section>

        );
    }
}

export default LoungeAccess;


