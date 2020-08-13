import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { DataContext } from "../../OtaContext";

class MasterPassport extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      expires: moment(),
      minExpiryDate: moment(),
      maxExpiryDate: moment().add(15, "years")
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

    listDiv = this.context.CountriesRsc.map((val, idx) => {
      return (
        <option key={val.Code} value={val.Code}>
          {val.Country}
        </option>
      );
    });

    return (
      <section>
        <div className="passportDiv">
          <div className="row">
            <div className="col-6">
            <label htmlFor={`#paxPassPortNation${this.props.paxId}`}>{this.context.translations[this.context.lang].passport.nationality}</label>
              <select className="form-control"  id={`#paxPassPortNation${this.props.paxId}`} >
                <option key="" value="">{this.context.translations[this.context.lang].passport.nationality}</option>
                {listDiv}
              </select>
            </div>

            <div className="col-6">
            <label htmlFor={`#paxPassPortIssueCo${this.props.paxId}`}>{this.context.translations[this.context.lang].passport.nationality}</label>
              <select className="form-control" id={`#paxPassPortIssueCo${this.props.paxId}`} >
                <option key="" value="">{this.context.translations[this.context.lang].passport.issue}</option>
                {listDiv}
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label htmlFor={`#paxPassPortNo${this.props.paxId}`}>{this.context.translations[this.context.lang].passport.passportNo}</label>
              <input
               id={`#paxPassPortNo${this.props.paxId}`} 
                type="text"
                placeholder={this.context.translations[this.context.lang].passport.passportNo}
                className="form-control"
              />
            </div>

            {/* min date should be fly date */}
            <div className="col-6">
              <label  htmlFor={`#paxPassPortExpDate${this.props.paxId}`}>{this.context.translations[this.context.lang].passport.expireDate}</label>
              <DatePicker
                id={`#paxPassPortExpDate${this.props.paxId}`} 
                className="form-control"
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
