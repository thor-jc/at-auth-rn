import { AuthReducer } from './auth-reducer';

export function getAuthModule() {
    return {
        // Unique id of the module
        id: 'at.auth',
        // Maps the Store key to the reducer
        reducerMap: {
            auth: AuthReducer,
        },
        // Optional: Any actions to dispatch when the module is loaded
        initialActions: [() => console.log('auth-module::initialActions')],
        // Optional: Any actions to dispatch when the module is unloaded
        finalActions: [() => console.log('auth-module::finalActions')],
    };
}
