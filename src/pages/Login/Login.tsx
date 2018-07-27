import * as React from 'react';
import Page from '../Page/Page';

export interface Props {
    title: string
}

class Login extends React.Component<Props, {}> {

    public render(): JSX.Element {

        return (
            <Page title='Truefalgar Auth0' />
        );
    }

}

export default Login;
