import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Menu from '../Menu/Menu';
import routes from '../../routes'

export interface HeaderProps {
    title: string
}

class Header extends React.Component<HeaderProps> {
    public render(): JSX.Element {
        const { title } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                <Typography variant="title" color="inherit">
                    {title}
                </Typography>
                <Menu links={ routes }/>

                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
