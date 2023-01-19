
import { ActionReducerMap } from '@ngrx/store';
import * as reducers  from './reducers';

export interface AppState {
   hotels: reducers.HotelsState,
   hotel: reducers.HotelState,
}

export const appReducers: ActionReducerMap<AppState> = {
   hotels: reducers.hotelsReducer,
   hotel: reducers.hotelReducer,
}
