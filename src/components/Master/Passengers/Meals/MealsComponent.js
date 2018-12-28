import React, {Component} from 'react';
import MealLeg from './MealLeg';

class MealsComponent  extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const keys = [0, 1];
        console.log('meals component');
        console.log(this.props);
        return (

            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="alert alert-success" role="alert">

                            <div className="row">
                                <div className="col-6">
                                    Are you hungry ?
                                </div>
                                <div className="col-2">
                                    <i className="fas fa-concierge-bell"/>
                                    <i className="fas fa-utensils"/>
                                </div>

                                <div className="col-2">
                                    <button className="btn btn-sm btn-dark btn-block btnToggle"
                                            data-toggle="collapse"
                                            data-target={`#mealsCollapse${this.props.paxId}`}
                                            aria-expanded="false" aria-controls="collapseExample">
                                        Toggle
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="collapse" id={`mealsCollapse${this.props.paxId}`}>

                    {keys.map(kk => {
                        return (<div className="row">
                            <div className="col-12">
                                <MealLeg key={kk} leg={kk}
                                         paxData={this.props.paxData}
                                         paxId={this.props.paxId}
                                         />
                            </div>
                        </div>);
                    })}


                </div>

            </div>
        )
    }
}



export default MealsComponent;
