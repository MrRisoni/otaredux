import React, {Component} from 'react';
import {DataContext} from "../../OtaContext";

class FareTaxes extends Component {

    static contextType = DataContext;

    render() {

        console.log(this.context.ItineraryRsc);
        let rows = [];
        this.context.ItineraryRsc.forEach(leg => {
            leg.pricing.forEach(prices => {
                var singleRow = [];
                var proceed = true;
                var counter = this.context.numADT;
                if (prices.ptc == 'CNN') {
                    counter = this.context.numCNN;
                }
                if (prices.ptc == 'INF') {
                    counter = this.context.numINF
                }

                if (counter > 0) {
                    singleRow.push(<td>Leg</td>);
                    singleRow.push(<td>{prices.ptc}</td>);
                    singleRow.push(<td>{prices.fareEur}</td>);
                    singleRow.push(<td>{prices.taxesEur}</td>);

                    rows.push(singleRow);
                }
            });
        });

        return (<section>
            <table class="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Route</th>
                    <th>Type</th>
                    <th>Fare</th>
                    <th>Tax</th>
                </tr>
                </thead>
                <tbody>
                {rows.map(rw => (
                    <tr>{rw}</tr>
                ))}
                </tbody>
            </table>
        </section>)
    }
}

export default FareTaxes;
