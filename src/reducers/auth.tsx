import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../constants';

const initialState = {
  isAuth: false
}

export default function counter(state = initialState, action: any) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return Object.assign({}, state, { isAuth: true })
    case USER_LOGGED_OUT:
    return Object.assign({}, state, { isAuth: false })
    default:
      return state
  }
}
