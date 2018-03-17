import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';


@inject('otastore')
@observer
class SeatShow extends Component {

    render() {
        return (
            <div className="card bg-info seatShow">
                <div className="card-header"><b>Your seats!</b></div>
                <div className="card-body text-white">

                </div>
            </div>

        );
    }
}

export default SeatShow;


