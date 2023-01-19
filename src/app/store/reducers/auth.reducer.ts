import { createReducer, on } from '@ngrx/store';
import { unSetUser, setUser } from '../actions';
import { User } from '../../models/user.model';


export interface AuthState {
    user: User; 
}

export const initialState: AuthState = {
   user: null,
}

const _authReducer = createReducer(initialState,

    on(setUser, (state, {user}) => ({ ...state, user: {...user}})),
    on(unSetUser, state  => ({ ...state, user: null})),

);

export function authReducer(state, action) {
    return _authReducer(state, action);
}