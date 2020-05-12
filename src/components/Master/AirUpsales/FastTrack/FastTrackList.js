import React, {Component} from 'react';
import {DataContext} from "../../../OtaContext";
import _ from 'lodash';

class FastTrackList extends Component {
    static contextType =DataContext

    render() {
        var segs = [];

        this.context.ItineraryRsc.forEach(leg => {
            leg.segments.forEach(sg => {
                segs.push(sg.from['iata']);
                segs.push(sg.to['iata']);
            });
        });
        segs = _.uniqBy(segs);
        console.log(segs);


        var segsn  = this.context.ItineraryRsc.map(leg => {
            return leg.segments;
        })

        var segsnnnnn  = this.context.ItineraryRsc.map(leg => {
            return leg.segments;
        }).map(legSegs => {
             return legSegs.map(sgItm => {
                 return [sgItm.from['iata'],sgItm.to['iata']]
             })
        })
        console.log(segsnnnnn);



        return (
            <div> {segs} </div>

        );
    }
}

export default FastTrackList;
