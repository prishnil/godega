import {START_LOADING, STOP_LOADING, UIActions} from './ui.actions';

export interface State {
  isLoading: boolean;
}

const INITIAL_STATE: State = {
  isLoading: false
};

export function uiReducer(state = INITIAL_STATE, action: UIActions) {
  switch (action.type) {
    case START_LOADING:
      return {
        isLoading: true
      };
    case STOP_LOADING:
      return {
        isLoading: false
      };
    default:
      return state;
  }
}

export const GET_IS_LOADING = (state: State) => state.isLoading;
