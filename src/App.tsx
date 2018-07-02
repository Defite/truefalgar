import * as React from 'react';

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes';

import './App.css';

export interface Props {
  auth?: {
        login?: any,
        logout?: any
    }
}

export interface RoutesItem {
  path: string,
  component: any
}

class App extends React.Component<Props> {
  public login() {
    const { auth = {} } = this.props;

    auth.login();

  }

  public logout() {
      const { auth = {} } = this.props;

      auth.logout();
  }

  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <div>
          { routes.map( (route: RoutesItem, index: number) => {
              return <Route exact={true} path={ route.path } component={ route.component } key={ `menu-` + index } />
            })
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
