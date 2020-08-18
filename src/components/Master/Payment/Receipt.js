import React, { Component } from "react";
import { DataContext } from "../../OtaContext";

class Receipt extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">        
        {this.context.translations[this.context.lang].pay.Receipt}
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <label htmlFor="receiptSurName">{this.context.translations[this.context.lang].passengers.Surname}</label>
              <input
                type="text"  id="receiptSurName"
                placeholder={this.context.translations[this.context.lang].passengers.Surname}
                className="form-control"
              />
            </div>

            <div className="col-6">
              <label htmlFor="receiptName">{this.context.translations[this.context.lang].passengers.Name}</label>
              <input type="text" id="receiptName"
                placeholder={this.context.translations[this.context.lang].passengers.Name}                
               className="form-control" />
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <label htmlFor="receiptCountrySel">Country</label>
              <select className="form-control" id="receiptCountrySel"> 
                <option>Select Country</option>
                {this.props.countryList.map((val, idx) => (
                  <option key={val.Code} value={val.Code}>
                    {val.Country}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-6">
              <label htmlFor="receiptMobile">Phone</label>
              <input type="text" id="receiptMobile" placeholder="Phone" className="form-control" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Receipt;
