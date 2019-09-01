import { upsalesDispatcher } from './dispatcher';
import * as MasterCons from './allConstants';




export function addFlexibleTicketAction(data) {
  return MainDispatcher({actionName: MasterCons.ADD_FLEXIBLE_TICKET, load: data });

}


export function removeFlexibleTicketAction(data) {

   return MainDispatcher({actionName: MasterCons.REMOVE_FLEXIBLE_TICKET, load: data });

}



export function addBlueRibbonAction(data) {
  return MainDispatcher({actionName: MasterCons.ADD_BLUE_RIBBON, load: data });

}

export function removeBlueRibbonAction(data) {
  return MainDispatcher({actionName: MasterCons.REMOVE_BLUE_RIBBON, load: data });

}



export function addWebCheckinAction(data) {
    return MainDispatcher({actionName: MasterCons.ADD_WEBCHECKIN, load: data });

}

export function removeWebCheckinAction(data) {
   return MainDispatcher({actionName: MasterCons.REMOVE_WEBCHECKIN, load: data });
}



export function addParkingDayAction(data) {
    return MainDispatcher({actionName: MasterCons.ADD_PARK_DAYS, load: data });
}


export function subParkingDayAction(data) {
    return MainDispatcher({actionName: MasterCons.SUB_PARK_DAYS, load: data });

}



export function addFastTrackAction(data) {
    return MainDispatcher({actionName: MasterCons.ADD_FAST_TRACK, load: data });

}

export function removeFastTrackAction(data) {
  return MainDispatcher({actionName: MasterCons.REMOVE_FAST_TRACK, load: data });

}


export function addAirHelpAction(data) {
  return MainDispatcher({actionName: MasterCons.ADD_AIRHELP, load: data });
}


export function removeAirHelpAction(data) {
  return MainDispatcher({actionName: MasterCons.REMOVE_AIRHELP, load: data });
}


function MainDispatcher(args)
{
  console.log(args);
  return (dispatch, getState) => {
    dispatch({
      type: args.actionName,
      payload: args.load,
    });

    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
    dispatch(upsalesDispatcher(getState, MasterCons.UPSALES_CHANGED));
  };
}