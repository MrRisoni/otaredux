import React, {Component} from 'react';

class SeatPaxSelector extends Component {

    constructor(props)
    {
        super(props);

        this.handlePreSeatSelect = this.handlePreSeatSelect.bind(this);
    }



    handlePreSeatSelect()
    {
        console.log('selected for preseat ' + this.props.pax.id);
        this.props.changePreSeatSelectPassengerHandler(this.props.pax.id)

    }


    render() {
        console.log('this.props.preseatSelectedPax ' + this.props.preseatSelectedPax);
        let text = 'Choose for ';
        if(this.props.pax.active && this.props.pax.type !== 'INF') {
            let alertClass = "alert  alert-warning seatPaxSelector ";
            if (this.props.pax.id === this.props.preseatSelectedPax) {
                alertClass = "alert  alert-dark seatPaxSelector ";
                text = '';
            }
            return (

                <div className="row">

                    <div className="col-md-10">
                        <div className={alertClass} role="alert" onClick={this.handlePreSeatSelect}>
                            {text} Passenger# {this.props.pax.humanId}
                            {this.props.pax.surname} {this.props.pax.name}
                        </div>
                    </div>

                    <div className="col-md-2">
                        {(this.props.pax.seat.number === 0) &&
                        <div className="alert alert-danger" role="alert">
                            Nothing selected
                        </div>
                        }

                        {(this.props.pax.seat.number !== 0) &&
                        <div className="alert alert-primary" role="alert">
                            {this.props.pax.seat.letter}{this.props.pax.seat.number}
                        </div>
                        }

                    </div>

                </div>)
        }
    }
}

export default SeatPaxSelector;


