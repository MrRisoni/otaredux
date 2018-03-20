import React, {Component} from 'react';

class MealSelection extends Component {
    render() {
        return (
            <select className="form-control">
                <option key="" value=""></option>
                {this.props.mealData.map(ml => {
                    return (<option
                        value={ml.title}>{ml.title} {ml.price.toFixed(2)} {this.props.currency.code}</option>)
                })}
            </select>
        );
    }
}

export default MealSelection;


