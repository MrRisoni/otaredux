import React, { Component } from 'react';

class InsuranceOption extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.updateOptions(this.props.insData.id);
  }

  render() {
    const price = (this.props.insData.price * this.props.currency.rate).toFixed(2);
    return (
      <div className="col-3">

        <div className="card text-center">
          <div className="card-header bg-warning">{this.props.insData.title}</div>

          <div className="card-body">


            <input
              type="radio"
              value={this.props.insData.id}
              onChange={this.handleChange}
              checked={this.props.selectedOption === this.props.insData.id}
            />

          </div>

          <div className="card-footer">
            {price}
            {' '}
            {this.props.currency.code}
          </div>
        </div>

      </div>
    );
  }
}

export default InsuranceOption;
