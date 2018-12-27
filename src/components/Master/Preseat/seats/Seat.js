import React, { Component } from 'react';

class Seat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seatClassObject: ""
        };

        this.pickThisSeat = this.pickThisSeat.bind(this);
    }

    pickThisSeat()
    {
        console.log('Seat ' + this.props.colName + ' ' + this.props.rowId );
        console.log(this.props.preSeatSelectedItems);
        this.props.pickSeatHandler(this.props.colName + this.props.rowId,this.props.preSeatSelectedItems.selectedSegment,
            this.props.preSeatSelectedItems.selectedPaxId);
    }

    decideSeatClass()
    {
        return "";
    }


    render() {
        return (
            <div className="row">
                <div className="col-1">
                    <button type="button" onClick={this.pickThisSeat} className={"btn seatButton btn-sm btn-primary" + this.decideSeatClass()}>
                          {this.props.colName}  {this.props.rowId}
                    </button>
                </div>
            </div>

        );
    }
}

export default Seat;


