import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import * as hotelActions from '../actions'
import { HotelService } from '../../services/hotel.service';
import { catchError, of } from 'rxjs';


@Injectable()
export class HotelEffects {

    constructor(
        private actions$: Actions,
        private hotelService: HotelService
    ){}

    loadHotel$ = createEffect(() => this.actions$.pipe(
        ofType(hotelActions.loadHotel),
        mergeMap(
            (action) => this.hotelService.getHotelById(action.id)
            .pipe(
                map(hotel => hotelActions.loadHotelSuccess({hotel: hotel})),
                 catchError(err => of(hotelActions.loadHotelError({payload: err})))
            )
        )
    ))
}