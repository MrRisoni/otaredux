import React, {Component} from 'react';
import SingleMilesCard from './SingleMilesCard';

class MilesCards extends Component {

    render() {

        console.log('miles card ' + this.props.carrierList);
        return (
            <div>
                <br/>
                <div className="alert alert-info" role="alert">Have you got miles card for your trip?</div>

                {this.props.carrierList.map( (obj,idx) => {
                    return (<SingleMilesCard key={idx} data={obj}/>)
                })}


            </div>

        );
    }
}

export default MilesCards;


