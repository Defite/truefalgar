import * as React from 'react';

import Header from '../../components/Header/Header';

export interface PageProps {
    title: string
}

class Page extends React.Component<PageProps, {}> {
    public render(): JSX.Element {
        
        const { title, children } = this.props;

        return (
            <div className="wrapper">
                <Header title={ title } />
                <div className="content">
                    { children }
                </div>
            </div>
        )
    }

}

export default Page;
