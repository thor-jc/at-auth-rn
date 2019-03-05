import { KeepAwake, registerRootComponent } from 'expo';

import App from '../App';
import AuthScreen from './screens/AuthScreen';
import { store } from './store';

export { AuthScreen, store };

if (__DEV__) {  // eslint-disable-line no-undef
  KeepAwake.activate();
}

registerRootComponent(App);
