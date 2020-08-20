import { SIGN_UP, SIGN_IN } from './types';
import signUpService from '../services/User';

export const signUp = (signUpData) => async (dispatch) => {
  const data = await signUpService(signUpData);
  dispatch({ type: SIGN_UP, payload: data });
  return data;
};

export const signIn = (signInData) => async (dispatch) => {
  const data = await signIn(signInData);
  dispatch({ type: SIGN_IN, payload: data });
  return data;
};
