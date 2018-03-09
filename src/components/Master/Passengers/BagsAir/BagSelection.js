import React, {Component} from 'react';

class BagSelection extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(' bag click');
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">

                    XYZ
                    <button onClick={this.handleClick}
                            className="btn-primary btn btnPlusMinusBags">+
                    </button>

                    <button onClick={this.handleClick}
                            className="btn-danger btn btnPlusMinusBags">-
                    </button>
                    {this.props.bagData.weight} {this.props.bagData.price.toFixed(2)} {this.props.currency.code}

                </div>
            </div>);
    }
}


export default BagSelection;
