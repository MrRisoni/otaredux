import React, {Component} from 'react';


class SeatButton extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            seatClassName: ""
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        console.log('---------');
        console.log("Click seat " + this.props.seatID );
        console.log("rowID " + this.props.rowID );
        if (this.props.isAvailable) {
            // clear other classes for that leg...
            this.setState({seatClassName: 'seatChosen seatButton col-md-1'});
            this.props.otastore.selectSeat({
                seat: this.props.seatID,
                paxId: 0
            });
        }

    }

    componentWillMount()
    {
        let classAvailability = (this.props.isAvailable) ? "seatAvailable" : "seatTaken";
        classAvailability += "  seatButton col-md-1";
        this.setState({seatClassName:classAvailability});
    }

    render() {

        return (
            <div className={this.state.seatClassName} key={this.props.seatID}
                 onClick={this.handleClick} >
            </div>);
    }
}

export default SeatButton;


