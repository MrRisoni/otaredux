import React, { Component } from 'react';
import BagSelection from './BagSelection';


class BagLeg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const legTitle = (this.props.leg == 0) ? 'Departure' : 'Return';

    return (
      <section>
        <div className="row">
          <div className="col-12">

            <div className="card">
              <div className="card-header">
                {legTitle}
                {' '}

                 (Max {this.props.limitBags})
              </div>
              <div className="card-body">
                {this.props.bagList.filter(bg => this.props.leg == bg.legId).map(
                  bgItem => (
                    <BagSelection
                      bagData={bgItem}
                      key={bgItem.key}
                      ptc={this.props.ptc}
                      limitBags={this.props.limitBags}
                      legId={this.props.leg}
                      paxId={this.props.paxId}
                    />
                  ),
                )}

              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}



export default BagLeg;
