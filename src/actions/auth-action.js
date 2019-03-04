import {
  APP_LOADING,
  AUTH_FORM_FIELD_CHANGE
} from './types';

export const loadingApp = (data) => ({ type: APP_LOADING, payload: data });


export const loginEvent = (type, data) => ({ type, payload: data });

export const handleFieldChange = (field, data) =>
    ({ type: AUTH_FORM_FIELD_CHANGE, field, payload: data });
