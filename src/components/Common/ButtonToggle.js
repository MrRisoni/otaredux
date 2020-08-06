import React, { Component } from "react";
import { DataContext } from "../OtaContext";

class ButtonToggle extends Component {
  static contextType = DataContext;

  render() {
    console.log("LANG " + this.context.lang);
    return (
      <div className={`col-2 ${this.props.clsName}`}>
        <button
          className="btn btn-sm btn-dark btn-block btnToggle"
          data-toggle="collapse"
          data-target={`#${this.props.target}`}
          aria-expanded="false"
          aria-controls="collapseExample"
        >
       {this.context.translations[this.context.lang].general.Toggle}
        </button>
      </div>
    );
  }
}

export default ButtonToggle;
