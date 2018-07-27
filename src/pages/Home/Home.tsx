import * as React from 'react';
import pure from 'recompose/pure';
import Page from '../Page/Page';

export interface Props {
    isAuth: boolean,
    onLogin: () => void,
    onLogout: () => void
}

class Home extends React.Component<Props> {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        const { isAuth } = this.props;
        
        return (

             <Page title='Truefalgar home page'>
                This is my favourite home page so far

                <div>
                    { isAuth ? 'You\'re all set' : 'Please, login' }    
                </div>         
            </Page>
        );
    }
}

export default pure(Home);
