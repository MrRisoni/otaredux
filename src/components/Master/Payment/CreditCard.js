import React, { Component } from "react";
import ButtonToggle from "../../Common/ButtonToggle";
import { DataContext } from "../../OtaContext";

class CreditCard  extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
  }

  render() {
  return (
    <section id="creditCard">
      <div className="row">
        <div className="col-8">
          <div className="card paymentDetails">
            <div className="card-header bg-light">
              <div className="row">
                <div className="col-6">                
                {this.context.translations[this.context.lang].pay.CreditCard}
                </div>

                <div className="col-2">
                  <i className="far fa-credit-card" />
                </div>

                <ButtonToggle
                  target={`creditCardCollapse`}
                  clsName={"offset-2"}
                />
              </div>
            </div>

            <div className="card-body collapse show" id="creditCardCollapse">
              <div className="row">
                <div className="col-2">
                <label htmlFor="cardType">{this.context.translations[this.context.lang].pay.CreditCard}</label>
                  <select className="form-control" id="cardType">
                    <option></option>
                    <option value="">Visa Debit</option>
                    <option value="">Visa Credit</option>
                    <option value="">Mastercard Debit</option>
                    <option value="">Mastercard Credit</option>
                  </select>
                </div>

                <div className="col-5">
                <label htmlFor="cardNumber">{this.context.translations[this.context.lang].pay.CardNumber}</label>
                  <input id="cardNumber"
                    type="text"
                    placeholder="Card Number"
                    className="form-control"
                  />
                </div>

                <div className="col-2">
                <label htmlFor="cardCvv2">CVV2</label>
                  <input  id="cardCvv2"
                    type="text"
                    placeholder="CVV2"
                    className="form-control"
                  />
                </div>
              </div>

              <br />

              <div className="row">
                <div className="col-4">
                <label htmlFor="cardBankName">{this.context.translations[this.context.lang].pay.Bank}</label>
                  <input  id="cardBankName"
                    type="text"
                    placeholder="Bank Name"
                    className="form-control"
                  />
                </div>

                <div className="col-6">
                <label htmlFor="cardHolder">{this.context.translations[this.context.lang].pay.CardHolder}</label>
                  <input  id="cardHolder"
                    type="text"
                    placeholder="Card Holder"
                    className="form-control"
                  />
                </div>
                
              </div>

              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }
};

export default CreditCard;
