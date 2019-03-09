export const APP_LOADING = 'at.auth.app_loading';
export const AUTH_FORM_FIELD_CHANGE = 'at.auth.auth_form_field_change';
export const USER_NAME = 'at.auth.user_name';
export const PASSWORD = 'at.auth.password';
export const USER_LOGIN = 'at.auth.user_login';
export const USER_LOGIN_FAILED = 'at.auth.user_login_failed';
export const USER_LOGIN_SUCCESS = 'at.auth.user_login_passed';
export const USER_LOGIN_EXPIRED = 'at.auth.user_login_expired';

export const loadingApp = (data) => ({ type: APP_LOADING, payload: data });

export const loginEvent = (type, data) => ({ type, payload: data });

export const handleFieldChange = (field, data) =>
    ({ type: AUTH_FORM_FIELD_CHANGE, field, payload: data });
