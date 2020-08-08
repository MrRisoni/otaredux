import React from "react";
import ButtonToggle from "../../Common/ButtonToggle";

const CreditCard = props => {
  return (
    <section>
      <div className="row">
        <div className="col-8">
          <div className="card paymentDetails">
            <div className="card-header bg-light">
              <div className="row">
                <div className="col-6">                
                {props.translPay.CreditCard}

                </div>

                <div className="col-2">
                  <i className="far fa-credit-card" />
                </div>

                <ButtonToggle
                  target={`creditCardCollapse`}
                  clsName={""}
                />
              </div>
            </div>

            <div className="card-body collapse show" id="creditCardCollapse">
              <div className="row">
                <div className="col-4">
                  <select className="form-control">
                    <option></option>
                    <option value="">Visa Debit</option>
                    <option value="">Visa Credit</option>
                    <option value="">Mastercard Debit</option>
                    <option value="">Mastercard Credit</option>
                  </select>
                </div>

                <div className="col-5">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="form-control"
                  />
                </div>
              </div>

              <br />

              <div className="row">
                <div className="col-4">
                  <input
                    type="text"
                    placeholder="Bank Name"
                    className="form-control"
                  />
                </div>

                <div className="col-6">
                  <input
                    type="text"
                    placeholder="Card Holder"
                    className="form-control"
                  />
                </div>

                <div className="col-2">
                  <input
                    type="text"
                    placeholder="CVV2"
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
};

export default CreditCard;
