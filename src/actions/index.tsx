import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../constants';
import { createAction } from 'redux-actions';

export interface UserLogin {
    type: USER_LOGGED_IN,
}

export interface UserLogout {
    type: USER_LOGGED_OUT,
}

export const userLogin = createAction(USER_LOGGED_IN);

export const userLogout = createAction(USER_LOGGED_OUT);
