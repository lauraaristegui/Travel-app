import { createReducer, on } from '@ngrx/store';
import { loadHotel, loadHotelSuccess, loadHotelError } from '../actions';
import { ListHotels } from '../../models/hotels.model';

export interface HotelState {
    id: string,
    hotel: ListHotels,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const hotelInitialState: HotelState = {
   id: null,
   hotel: null,
   loaded: false,
   loading: false,
   error: null
}

const _hotelReducer = createReducer(hotelInitialState,

    on(loadHotel, (state, {id}) => 
    ({ ...state, 
        loading: true,
        id: id
    })),
    on(loadHotelSuccess, (state, {hotel}) => 
    ({ ...state, 
        loading: false,
        loaded: true,
        hotel: {...hotel}
    })),

    on(loadHotelError, (state, {payload}) => 
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

export function hotelReducer(state, action) {
    return _hotelReducer(state, action);
}