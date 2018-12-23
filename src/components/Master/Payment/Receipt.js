import React, {Component} from 'react';

class Receipt extends Component {


    constructor(props) {
        super(props);


    }

    render() {


        return (
            <div className="card">
                <div className="card-header">
                    Receipt Details
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="birthday">Surname</label>
                            <input type="text" placeholder="Surname" className="form-control"/>

                        </div>

                        <div className="col-6">
                            <label htmlFor="birthday">Name</label>
                            <input type="text" placeholder="Name" className="form-control"/>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="birthday">Country</label>
                            <select className="form-control">
                                <option>Select Country</option>
                                {this.props.listDiv}
                            </select>

                        </div>

                        <div className="col-6">
                            <label htmlFor="birthday">Phone</label>
                            <input type="text" placeholder="Phone" className="form-control"/>
                        </div>
                    </div>


                </div>
            </div>

        );
    }
}

export default Receipt;


