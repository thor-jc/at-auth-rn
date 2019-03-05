import { createStore } from 'redux-dynamic-modules';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';

const store = createStore(
  {},
  [getThunkExtension()]
);

export default store;
