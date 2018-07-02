import * as React from 'react';
import Page from '../Page/Page';

export interface Props {
    title: string
}


class About extends React.Component<Props, {}> {

    public render(): JSX.Element {
        
        return (
            <Page title='Truefalgar - About'>
                About page
            </Page>
        );
    }

}

export default About;
