import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export interface Props {
    title: string
}

class Header extends React.Component<Props, {}> {
  public render() {
    const { title } = this.props;

    return (
        <AppBar position="static">
            <Toolbar>
            <Typography variant="title" color="inherit">
                {title}
            </Typography>
            </Toolbar>
        </AppBar>
    );
  }
}

export default Header;
