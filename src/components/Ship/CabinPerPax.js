import React, {Component} from 'react';

class CabinPerPax extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div className="row cabinPaxSelection">
                <div
                    className="col-7"> {this.props.pax.humanId} {this.props.pax.gender} {this.props.pax.surname} {this.props.pax.name}  </div>

                <div className="col-5">
                    <select className="form-control">
                        <option key="" value="">Select Type</option>
                        {this.props.cabins.map(cabinType => {
                            return (<option key={cabinType.key} value="">{cabinType.title}</option>)
                        })}
                    </select>
                </div>

            </div>
        )
    }
};

export default CabinPerPax;
