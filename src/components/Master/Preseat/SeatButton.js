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
        //if (this.state.isAvailable ===true) {
            // clear other classes for that leg...
            this.setState({seatClassName: 'seatChosen seatButton col-md-1'});
            //console.log('selecting seat ' + this.props.seatID );
            const regexMatch = this.props.seatID.match(/[a-zA-Z]+|[0-9]+(?:\.[0-9]+|)/g);

            var letter = regexMatch[0].substr(1);
            var number =regexMatch[1];
            console.log(letter + number);

            const paxObj =this.props.passengers[this.props.preseatSelectedPax]

            const old_letter = paxObj.seat.letter;
            const old_number = paxObj.seat.number;

            this.props.selectSeatHandler({paxId:this.props.preseatSelectedPax ,
                letter:letter,
                number:number,
                oldLetter:old_letter,
                oldNumber:old_number});


     //   }

    }

    componentDidMount()
    {



      //  this.setState({seatClassName:classAvailability,isAvailable:avail});
    }


    render() {

        console.log('Mounting.$$$$..');

        const seatLetter = this.props.seatID.substring(1);
        let avail = false;
        let chosen = false;
        for (let codeSeat of this.props.seatMap) {
            if ( codeSeat.code === seatLetter) {
                avail = true;

                if (codeSeat.free === false) {
                    console.log('Mounting...');
                    console.log(codeSeat);

                    console.log(codeSeat);
                    chosen = true;

                }
                break;
            }
        }

        let classAvailability =   "seatTaken";
        if (avail === true && chosen === false) {
            classAvailability =  "seatAvailable";
        }
        if (avail === true && chosen === true) {
            classAvailability =  "seatChosen";
        }

        classAvailability += "  seatButton col-md-1";


        return (
            <div className={classAvailability} key={this.props.seatID}
                 onClick={this.handleClick} >
            </div>);
    }
}

export default SeatButton;


