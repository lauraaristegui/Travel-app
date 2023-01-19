
import { ActionReducerMap } from '@ngrx/store';
import * as reducers  from './reducers';

export interface AppState {
   hotels: reducers.HotelsState,
   hotel: reducers.HotelState,
   ui: reducers.uiState,
   user: reducers.AuthState,
}

export const appReducers: ActionReducerMap<AppState> = {
   hotels: reducers.hotelsReducer,
   hotel: reducers.hotelReducer,
   ui: reducers.uiReducer,
   user: reducers.authReducer,
}
