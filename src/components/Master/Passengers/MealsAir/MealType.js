import React from 'react';

const MealType = function (props) {
    return (
        <div className="card text-white bg-info mb-3">
            <div className="card-header">{props.type}</div>
            <div className="card-body">
                <p className="card-text">

                    <select className="form-control">
                        <option key="" value=""></option>
                        {this.props.countriesList}
                    </select>

                </p>
            </div>
        </div>
    )
}

export default MealType;
