import * as React from 'react';

// import history from './history';
// import Home from './pages/Home/Home';
// import Todo from './components/Todo/Todo';

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// import Auth from './components/Auth/Auth';

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

// const myAuth = new Auth();

// const handleAuthentication = (nextState: any, replace: any) => {
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
//     myAuth.handleAuthentication();
//   }
// }

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
