import React, { Component } from "react";
import SeatsSection from "./SeatsSection";

class SeatMap extends Component {
  render() {
    return (
      <section>
        {this.props.seats_map.sections.map(section => (
          <SeatsSection
            key={section.sectionId}
            segId={this.props.segId}
            data={section}
          />
        ))}
      </section>
    );
  }
}

export default SeatMap;
