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

        if (this.props.isAvailable) {
            // clear other classes for that leg...
            this.setState({seatClassName: 'seatChosen seatButton col-md-1'});

            this.props.selectSeatHandler({paxId:0 ,letter:this.props.seatID,number:0})

            /*this.props.otastore.selectSeat({
                seat: this.props.seatID,
                paxId: 0
            });*/
        }

    }

    componentWillMount()
    {
       // seatMap={this.props.seatMap}
        const seatLetter = this.props.seatID.substring(1);
        console.log(seatLetter);
        console.log(this.props.seatMap[3]);
        console.log('----------');
        let classAvailability =    (this.props.seatMap.indexOf(seatLetter) >-1) ? "seatAvailable" : "seatTaken";
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


