

import { ActionReducerMap } from '@ngrx/store';
import * as reducers  from './reducers';


export interface AppState {
   hotels: reducers.HotelsState
}



export const appReducers: ActionReducerMap<AppState> = {
   hotels: reducers.hotelReducer
}
