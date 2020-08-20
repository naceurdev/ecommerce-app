import { SIGN_UP } from '../actions/types';

const initialState = { user: {} };
export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
