import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import * as actsMeals from '../../../../actions/master/actionsMeals';


class MealSelection extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    if (ev.target.value === '') {
      this.props.removeMealHandler(
        {
          paxId: this.props.paxId,
          segId: this.props.segId,
          type: this.props.type,
        },
      );
    } else {
      this.props.addMealHandler(
        {
          paxId: this.props.paxId,
          mealId: ev.target.value,
          segId: this.props.segId,
          type: this.props.type,
        },
      );
    }
  }


  render() {
    return (
      <select className="form-control" onChange={this.handleClick}>
        <option key="" value="" />
        {this.props.mealData.map(ml => (
          <option key={ml.key} value={ml.id}>
            {' '}
            {ml.title}
            {' '}
            {' '}
            {ml.price.toFixed(2)}
            {' '}
            {' '}
            {this.props.currency.code}
          </option>
        ))}
      </select>
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currentCurrencyReducer,

  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({

    addMealHandler: actsMeals.addMealAction,
    removeMealHandler: actsMeals.removeMealAction,

  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(MealSelection);
