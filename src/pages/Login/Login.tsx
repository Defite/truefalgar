import * as React from 'react';

import Auth from '../../components/Auth/Auth';
import Page from '../Page/Page';

export interface Props {
    title: string
}

class Login extends React.Component<Props, {}> {

    public render(): JSX.Element {

        const auth = new Auth();
        auth.login();
        
        return (
            <Page title='Truefalgar Auth0' />
        );
    }

}

export default Login;
