import React, {Component} from 'react';
import CabinPerPax from './CabinPerPax';

class CabinPerLeg extends Component {
    render() {
        return (
            <div>
                {this.props.passengers.filter( pax => {
                    return pax.active === true;
                }).map( pax => {
                    return (<CabinPerPax pax={pax}
                                         selectCabinHandler={this.props.selectCabinHandler}
                                         cabins={this.props.cabins}/>)
                })}
            </div>)
    }
}

export default CabinPerLeg;


