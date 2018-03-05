import React, {Component} from 'react';

class BagSelection extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(bagId,paxId) {
        console.log(bagId + ' ' + paxId);
    }

    render() {
        let bagArray = [];
        this.props.bagsAir.forEach((bag) => {
            bagArray.push(
                <div className="row">
                    <div className="col-md-7">
                        <button onClick={this.handleClick(bag.id,this.props.paxId)}
                                className="button btn-primary btn">+
                        </button>
                        {bag.weight} {bag.price.toFixed(2)} {this.props.currency.code}
                    </div>
                </div>);
        });
        return (
            <div>{bagArray}</div>
        )
    }
}


export default BagSelection;
