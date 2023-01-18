import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import * as hotelsActions from '../actions/hotels.actions'
import { HotelService } from '../../services/hotel.service';
import { catchError, of } from 'rxjs';


@Injectable()
export class HotelsEffects {

    constructor(
        private actions$: Actions,
        private hotelService: HotelService
    ){}

    loadHotels$ = createEffect(() => this.actions$.pipe(
        ofType(hotelsActions.loadHotels),
        mergeMap(
            () => this.hotelService.getHotels()
            .pipe(
                map(hotels => hotelsActions.loadHotelsSuccess({hotels: hotels})),
                 catchError(err => of(hotelsActions.loadHotelsError({payload: err})))
            )
        )
    ))
}