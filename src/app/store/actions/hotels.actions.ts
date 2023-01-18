import { createAction, props } from '@ngrx/store';
import { ListHotels } from '../../models/hotels.model';

export const loadHotels = createAction('[hotels] load hotels');

export const loadHotelsSuccess = createAction('[hotels] load hotels Success',
    props<{hotels: ListHotels[]}>()
);

export const loadHotelsError = createAction('[hotels] load hotels Error',
    props<{payload: any}>()
);