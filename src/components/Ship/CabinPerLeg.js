import React, {Component} from 'react';
import CabinPerPax from "./CabinPerPax";

class CabinPerLeg extends Component {
    render() {
        return (
            <div>
                    {this.props.passengers.map( pax => {

                        return (<CabinPerPax pax={pax}
                                             cabins={this.props.cabins}/>)
                    })}
            </div>)
    }
}

export default CabinPerLeg;


