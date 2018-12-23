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
        const seatName = this.colName + this.rowId;

        let seatNotAllowed = false;
        let seatChosen = false;
        let seatNotAvailable = false;

        const selectedSeg = this.$store.state.preseat.selectedSegment - 1;
        const firstClassUpToRow = this.$store.state.trip.dep[selectedSeg].firstClassLimit;

        const cabinsOfSelectedPax = this.$store.state.passengerList.filter(px => px.id == this.$store.state.preseat.selectedPaxId)[0].cabinList;
        const cabinForSelectedPaxSegment = cabinsOfSelectedPax.filter(cb => cb.seg == this.$store.state.preseat.selectedSegment)[0].cabin;

        // check if seat has been reserved by another PNR
        const reservedSeats = this.$store.state.trip.dep[selectedSeg].taken;
        if (reservedSeats.indexOf(seatName) > -1) {
            seatNotAvailable = true;
        }

        this.$store.state.passengerList.forEach( (px) => {
            if (px.active === true) {
                px.seatList.forEach( (ssl) => {
                    if (ssl.seg == this.$store.state.preseat.selectedSegment) {
                        if (ssl.seatNo == seatName) {
                            seatChosen = true;
                        }
                    }
                })
            }
        });

        if ((seatNotAvailable == false) && (seatChosen == false)) {

            if ((cabinForSelectedPaxSegment == 'W') || (cabinForSelectedPaxSegment == 'Y')) {
                if (this.rowId < firstClassUpToRow) {
                    seatNotAllowed = true;
                }
            }

            if ((cabinForSelectedPaxSegment != 'W') && (cabinForSelectedPaxSegment != 'Y')) {
                if (this.rowId > firstClassUpToRow) {
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
                          {{colName}}  {{rowId}}
                    </button>
                </div>
            </div>

        );
    }
}

export default Seat;


