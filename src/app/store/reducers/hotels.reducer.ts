import { createReducer, on } from '@ngrx/store';
import { loadHotels, loadHotelsError, loadHotelsSuccess, unSetHotels } from '../actions';
import { ListHotels } from '../../models/hotels.model';

export interface HotelsState {
    hotels: ListHotels[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const hotelsInitialState: HotelsState = {
   hotels: [],
   loaded: false,
   loading: false,
   error: null
}

const _hotelsReducer = createReducer(hotelsInitialState,

    on(loadHotels, state => ({ ...state, loading: true})),
    on(loadHotelsSuccess, (state, {hotels}) => 
    ({ ...state, 
        loading: false,
        loaded: true,
        hotels: [...hotels]
    })),
    on(unSetHotels, state => 
    ({ ...state, hotels: [] })),

    on(loadHotelsError, (state, {payload}) => 
    ({ ...state, 
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message:payload.message
        }
    })),
);

export function hotelsReducer(state, action) {
    return _hotelsReducer(state, action);
}