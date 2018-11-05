import React, {Component} from 'react';


class SeatButton extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            seatClassName: "",
            isAvailable:false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {

        console.log('echo state ' + this.state.isAvailable);
        if (this.state.isAvailable ===true) {
            // clear other classes for that leg...
            this.setState({seatClassName: 'seatChosen seatButton col-md-1'});

            this.props.selectSeatHandler({paxId:0 ,letter:this.props.seatID,number:0})


        }

    }

    componentDidMount()
    {
       // seatMap={this.props.seatMap}
        const seatLetter = this.props.seatID.substring(1);
        console.log(seatLetter);
        console.log(this.props.seatMap[3]);
        console.log('----------');
        let avail = (this.props.seatMap.indexOf(seatLetter) <0);

        let classAvailability =    (avail ===true) ? "seatAvailable" : "seatTaken";
        classAvailability += "  seatButton col-md-1";
        this.setState({seatClassName:classAvailability,isAvailable:avail});
    }

    render() {

        return (
            <div className={this.state.seatClassName} key={this.props.seatID}
                 onClick={this.handleClick} >
            </div>);
    }
}

export default SeatButton;


