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
            //console.log('selecting seat ' + this.props.seatID );
            const regexMatch = this.props.seatID.match(/[a-zA-Z]+|[0-9]+(?:\.[0-9]+|)/g);

            var letter = regexMatch[0].substr(1);
            var number =regexMatch[1];
            console.log(letter + number);

            this.props.selectSeatHandler({paxId:this.props.preseatSelectedPax ,letter:letter,number:number})


        }

    }

    componentDidMount()
    {
        const seatLetter = this.props.seatID.substring(1);
        let avail = false;

        for (let codeSeat of this.props.seatMap) {
            if (codeSeat.code === seatLetter) {
                avail = true;
                break;
            }
        }

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


