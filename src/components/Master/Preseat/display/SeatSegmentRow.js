import React, { Component } from 'react';

class SeatSegmentRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cssClass: ''
        };

    }

    getSeatCost()
    {
       /* const paxId = this.props.paxData.id;

        const cabin = this.props.cabinSelection.cabinList.filter(cb => (cb.segId == this.segment.id && cb.paxId == paxId)[0].cabin;
        const preseatPrices = this.$store.state.trip.dep.filter(sg => sg.id == this.segment.id)[0].preseatPrices;
        const price = preseatPrices.filter(ppr => ppr.cabin == cabin)[0].price;
        let priceSeat = price * this.$store.state.rate;
        return priceSeat.toFixed(2);
        */


    }

    render() {
        return (
            <div className="card text-white bg-primary segmentSeat">
                <div className="card-body"> {/* v-bind:class="selectedTrigger" */}

                    <div className="row">
                        <div className="col-2">
                            {this.props.segment.from}
                        </div>

                        <div className="col-2">

                            {this.props.segment.to}
                        </div>


                        <div className="col-2">

                            Cost seatCost {this.props.currency.code}
                        </div>


                        <div className="col-4">

                            Seat selectedSeatNo
                        </div>


                        <div className="col-2">

                            <button type="button" className="btn btn-info">

                                PickSeat
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};

export default SeatSegmentRow;



/*


<script>
export default {
  name: 'SeatSegmentRow',
  props: ['paxData', 'segment'],
  computed: {

    selectedSeatNo(){
        const pax = this.$store.state.passengerList.filter(px => px.id == this.paxData.id)[0];
        return pax.seatList.filter(ssl => ssl.seg == this.segment.id)[0].seatNo;
    },
    selectedTrigger() {
      return {
        'selectedTrigger': (
          (this.$store.state.preseat.selectedPaxId === this.paxData.id) && (this.$store.state.preseat.selectedSegment === this.segment.id)),
      };
    },
  },
  methods: {
    pickSegment()
    {
      console.log('pick segment ' + this.paxData.id + ' ' + this.segment.id);
      this.$store.commit('PickSegment', {paxId:this.paxData.id, segId:this.segment.id});
    }
  }

};
</script>
 */
