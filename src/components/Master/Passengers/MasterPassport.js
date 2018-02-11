import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class MasterPassport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expires: moment(),
            minExpiryDate: moment()
        };

        this.changeExpiry = this.changeExpiry.bind(this);
    }


    changeExpiry(date)
    {
        this.setState({
            expires: date
        });
    }


    render() {
        return (
            <div className="passportDiv">
                <button className="btn btn-primary" type="button" data-toggle="collapse"
                        data-target=".collapsePassports" aria-expanded="false" aria-controls="collapsePassports">
                    Add Passports after the booking
                </button>

                <div className="collapse collapsePassports">

                    <br/>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="birthday">Nationality</label>
                            <select className="form-control" >
                                <option key="" value="">Nationality</option>
                                {this.props.countriesList}
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="birthday">Issuing Country</label>
                            <select className="form-control" >
                                <option key="" value="">Issue Country</option>
                                {this.props.countriesList}
                            </select>
                        </div>
                    </div>


                    <br/>
                    <div className="row">

                        <div className="col-md-6">
                            <label htmlFor="birthday">Passport No</label>
                            <input type="text" placeholder="Passport No"
                                   className="form-control"/>
                        </div>

                        {/* min date should be fly date */}
                        <div className="col-md-6">
                            <label htmlFor="birthday">Expiration Date</label>
                            <DatePicker className="form-control"
                                        dateFormat="DD/MM/YYYY"
                                        minDate={this.state.minExpiryDate}
                                        openToDate={this.state.minExpiryDate}
                                        selected={this.state.expires}
                                        onChange={this.changeExpiry}
                            />
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

export default MasterPassport;


