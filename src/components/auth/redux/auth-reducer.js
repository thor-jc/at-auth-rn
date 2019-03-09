import {
  APP_LOADING,
  AUTH_FORM_FIELD_CHANGE,
  USER_LOGIN,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_EXPIRED
} from './auth-action';

const INITIAL_STATE = {
  isLoading: false
};

export const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return state;
    case APP_LOADING:
      return { loading: action.payload };
    case AUTH_FORM_FIELD_CHANGE:
      return { [action.field]: action.payload };
    case USER_LOGIN_FAILED:
    case USER_LOGIN_SUCCESS:
    case USER_LOGIN_EXPIRED:
    default:
      return state;
  }
};
