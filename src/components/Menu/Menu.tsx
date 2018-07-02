import * as React from 'react';

// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

export interface Props {
    path: string,
    name: string,
    exclude?: boolean
}

export interface MenuProps {
    links: Props[]
}

class Menu extends React.Component<MenuProps> {
    
    public render() {
        const { links } = this.props;
        
        return links
        .filter((link) => !link.exclude)
        .map( (link, index) => {
            return (
                <div key={ 'menu-item-' + index }>
                     <Button><Link to={ link.path }>{ link.name }</Link></Button>
                </div>
            ) 
            
        });
    }
}

export default Menu;
