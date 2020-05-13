import React, {Component} from 'react';
import {DataContext} from "../../OtaContext";


class PassengerTable extends Component {
    static contextType = DataContext;

    render() {
        return (
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.context.passengers.filter(allpx => allpx.active).map((px,idx) => (
                            <tr>
                                <td>{px.name}</td>
                                    <td>{px.surame}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

        );
    }
}

export default PassengerTable;


