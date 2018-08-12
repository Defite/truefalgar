import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { HomePage } from '../pages';
import { AuthProps, AuthState, ConnectAuthProps } from '../types/auth';
import * as HomeActions from '../actions';

class Home extends React.Component<AuthProps, AuthState> {
  public login = () => {
    this.props.userLogin()
  }

  public logout = () => {
    this.props.userLogout()
  }

  public render() {
    const { isAuth } = this.props.auth;
    
    return (
      <HomePage
        isAuth={ isAuth }
        login={ this.login }
        logout={ this.logout }
      />
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(HomeActions, dispatch)
}

export default connect<{}, ConnectAuthProps>(mapStateToProps, mapDispatchToProps)(Home)

