import React, {Component} from 'react';

import './SeatRow.css';

import SeatButton from './SeatButton';

class SeatRow extends Component {
    constructor(props)
    {
        super();
    }
    render() {

        let SeatDiv = [];
        for  (let i =0; i < 3; i++)
        {

            const key= 'seatbut_' + this.props.colLetter + (this.props.rowID + i + 1);
            const seatID= 's'+ this.props.colLetter + parseInt(this.props.rowID*3  + i + 1);

            let isAvailable = (Math.floor(Math.random() * 100) + 1) > 30;

            SeatDiv.push(<SeatButton key={key}
                                     isAvailable={isAvailable}
                                     rowID={this.props.rowID}
                                     seatID={seatID}/>)
        }

        return (<div className="row">{SeatDiv}</div>);
    }
}

export default SeatRow;


