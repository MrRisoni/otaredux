import React, { Component } from "react";
import { DataContext } from "../../../OtaContext";
import ButtonToggle from "../../../Common/ButtonToggle";

class Parking extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.handleAddDays = this.handleAddDays.bind(this);
    this.handleSubtractDays = this.handleSubtractDays.bind(this);
  }

  handleAddDays() {
    console.log("add park days");
    this.context.functions.actionParking({sign:1})
  }

  handleSubtractDays() {
    console.log("remove park days");
    this.context.functions.actionParking({sign:-1})
  }

  render() {
    const originAirport = this.context.ItineraryRsc[0].from.iata;
    console.log("origin airport " + originAirport);
    console.log(originAirport);

    return (
      <section className="upsalesSection">
        <div className="row ">
          <div className="col-8">
            <div className="card">
              <div className="card-header bg-light">
                <div className="row">
                  <div className="col-8">
                    
                  {this.context.translations[this.context.lang].upsales.Parking}

                     </div>
                  <ButtonToggle target={"parkingCollaprse"}
                    clsName={"offset-2"} />

               </div>
              </div>

              <div className="card-body collapse" id="parkingCollaprse">
                <div className="row">
                  <div className="col-12">
                    <table className="table table-bordered table-stripped">
                      <thead>
                        <tr>
                          <th>Up to days</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.context.ParkingRsc[originAirport].map(prcd => {
                          return (
                            <tr key={prcd.upToDays}>
                              <td>Up to days {prcd.upToDays}</td>
                              <td> {prcd.costEuro} {this.context.currentCurrency.code}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">park days {this.props.parkDays}</div>
                  <div className="col-4">
                    <button
                      className="btn-primary btn btn-sm"
                      onClick={this.handleAddDays}
                    >
                      Add Day
                    </button>
                    <button
                      className="btn-danger btn btn-sm"
                      onClick={this.handleSubtractDays}
                    >
                      Remove Day
                    </button>
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

export default Parking;
