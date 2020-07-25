import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {DataContext} from "../../OtaContext";


class MasterPassport extends Component {
    static contextType = DataContext;

    constructor(props) {
        super(props);
        this.state = {
            expires: moment(),
            minExpiryDate: moment(),
            maxExpiryDate: moment().add(15, 'years'),
        };

        this.changeExpiry = this.changeExpiry.bind(this);
    }

    changeExpiry(date) {
        this.setState({
            expires: date
        });
    }

    render() {
        let listDiv = [];
        this.context.CountriesRsc.forEach( (val, idx) => {
            listDiv.push(<option key={val.Code} value={val.Code}>{val.Country}</option>);
        });

        return (
            <section>

            <div className="passportDiv">
                <br/>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="birthday"> passport.nationality</label>
                        <select className="form-control">
                            <option key="" value=""> passport.nationality</option>
                            {listDiv}
                        </select>
                    </div>

                    <div className="col-6">
                        <label htmlFor="birthday">passport.issue</label>
                        <select className="form-control">
                            <option key="" value="">Issue Country</option>
                            {listDiv}
                        </select>
                    </div>
                </div>


                <br/>
                <div className="row">

                    <div className="col-6">
                        <label htmlFor="birthday">passport.passportNo</label>
                        <input type="text" placeholder="Passport No"
                               className="form-control"/>
                    </div>

                    {/* min date should be fly date */}
                    <div className="col-6">
                        <label htmlFor="birthday">passport.expireDate</label>
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
            </section>

        );
    }
}

export default MasterPassport;
