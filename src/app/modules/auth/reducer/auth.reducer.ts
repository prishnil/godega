import { AuthActions, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from './auth.actions';

export interface State {
  isAuthenticated: boolean;
}

const INITIAL_STATE: State = {
  isAuthenticated: false
};

export function authReducer(state = INITIAL_STATE, action: AuthActions) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        isAuthenticated: true
      };
    case SET_UNAUTHENTICATED:
      return {
        isAuthenticated: false
      };
    default:
      return state;
  }
}

export const GET_IS_AUTHENTICATED = (state: State) => state.isAuthenticated;

// look into setting up reducer for user data
