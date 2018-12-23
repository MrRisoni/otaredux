import React, {Component} from 'react';

class Seat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seatClassObject: ""
        };

    }


    decideSeatClass()
    {
        const seatName = this.props.colName + this.props.rowId;

        let seatNotAllowed = false;
        let seatChosen = false;
        let seatNotAvailable = false;

        const selectedSeg = 1;//this.$store.state.preseat.selectedSegment - 1;
        const firstClassUpToRow =22;// this.$store.state.trip.dep[selectedSeg].firstClassLimit;

        const cabinsOfSelectedPax =[]; //this.props.passengers.filter(px => px.id == this.$store.state.preseat.selectedPaxId)[0].cabinList;
        const cabinForSelectedPaxSegment = 'Y'; // cabinsOfSelectedPax.filter(cb => cb.seg == this.$store.state.preseat.selectedSegment)[0].cabin;

        // check if seat has been reserved by another PNR
        const reservedSeats = []; //this.$store.state.trip.dep[selectedSeg].taken;
        if (reservedSeats.indexOf(seatName) > -1) {
            seatNotAvailable = true;
        }

       /* this.props.passengers.forEach( (px) => {
            if (px.active === true) {
                px.seatList.forEach( (ssl) => {
                  //  if (ssl.seg == this.$store.state.preseat.selectedSegment) {
                        if (ssl.seg == 1) {

                            if (ssl.seatNo == seatName) {
                            seatChosen = true;
                        }
                    }
                })
            }
        });*/

        if ((seatNotAvailable == false) && (seatChosen == false)) {

            if ((cabinForSelectedPaxSegment == 'W') || (cabinForSelectedPaxSegment == 'Y')) {
                if (this.props.rowId < firstClassUpToRow) {
                    seatNotAllowed = true;
                }
            }

            if ((cabinForSelectedPaxSegment != 'W') && (cabinForSelectedPaxSegment != 'Y')) {
                if (this.props.rowId > firstClassUpToRow) {
                    seatNotAllowed = true; // pax is business class , he cannot pick economy
                }
            }
        }

        let seatClassName = "";
        if (seatNotAllowed) {
            seatClassName += " seatNotAllowed ";
        }

        if (seatChosen) {
            seatClassName += " seatChosen ";
        }

        if (seatNotAvailable) {
            seatClassName += " seatNotAvailable ";
        }

        return seatClassName;
    }

    render() {
        return (
            <div className="row">
                <div className="col-1">
                    <button type="button" className={"btn seatButton btn-sm btn-primary" + this.decideSeatClass()}>
                          {this.props.colName}  {this.props.rowId}
                    </button>
                </div>
            </div>

        );
    }
}

export default Seat;


