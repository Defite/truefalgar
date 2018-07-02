import * as React from 'react';
import Page from '../Page/Page';
import { Link } from 'react-router-dom';

export interface Props {
    title: string
}

class Home extends React.Component<Props, {}> {

    public render(): JSX.Element {
        
        return (
            <Page title='Truefalgar home page'>
                This is my favourite home page so far

                <Link to="/about">About page</Link>
            </Page>
        );
    }

}

export default Home;
