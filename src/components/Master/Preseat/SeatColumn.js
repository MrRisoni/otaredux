import React, {Component} from 'react';

import SeatRow from './SeatRow';

class SeatColumn extends Component {
    constructor(props)
    {
        super();
    }
    render() {


        let RowDiv = [];

        for  (let r =0; r < 35; r++) // row seats
        {
            let key = "col_" + this.props.colNo + "_row_" + r;
            // how many rows in the fuselage
            RowDiv.push(<SeatRow key={key}
                                 colNo={this.props.colNo}
                                 colLetter={this.props.colLetter}
                                 rowID={r}/>)
        }

        return (
            <div className="col-md-12 offset-md-2">{RowDiv}</div>
        );
    }
}

export default SeatColumn;


