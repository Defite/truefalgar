import * as React from 'react';
import { HomePage } from '../pages';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HomeActions from '../actions';

export interface ComponentProps {
    userLogin: () => void,
    userLogout: () => void,
    home: {
      isAuth: boolean
    }
}

export interface ConnectComponentProps {
    userLogin: () => void,
    userLogout: () => void,
}

export interface ComponentState {
  home: {}
}

class Home extends React.Component<ComponentProps, {}> {
  public login = () => {
    this.props.userLogin()
  }

  public logout = () => {
    this.props.userLogout()
  }

  public render() {
    const { isAuth } = this.props.home;
    
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
    home: state.home
  }
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(HomeActions, dispatch)
}

export default connect<{}, ConnectComponentProps>(mapStateToProps, mapDispatchToProps)(Home)

