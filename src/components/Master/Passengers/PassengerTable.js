import React, {Component} from 'react';

/*
.map((px,idx) => {
                        return (<tr>aaasa</tr>)
                    })}
 */
class PassengerTable extends Component {
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
                    {this.props.passengers.filter(allpx => allpx.active).map((px,idx) => {
                            return (<tr>
                                <td>{px.name}</td>
                                    <td>{px.surame}</td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            </section>

        );
    }
}

export default PassengerTable;


