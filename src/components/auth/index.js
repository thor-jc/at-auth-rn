import DynamicModulesLoader from 'redux-dynamic-modules';
import React from 'react';

import LoginForm from './LoginForm';
import { getAuthModule } from './redux/auth-module';

export default function DynamicAuth() {
    return (
        <DynamicModulesLoader modules={[getAuthModule()]}>
          <LoginForm />
        </DynamicModulesLoader>
    );
}
