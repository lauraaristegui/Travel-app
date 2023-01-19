import { createAction, props } from '@ngrx/store';
import { ListHotels } from '../../models/hotels.model';

export const loadHotel = createAction('[hotel] load hotel',
    props<{id: string}>()
);


export const loadHotelSuccess = createAction('[hotel] load hotel Success',
    props<{hotel: ListHotels}>()
);

export const loadHotelError = createAction('[hotel] load hotel Error',
    props<{payload: any}>()
);