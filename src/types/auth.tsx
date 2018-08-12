export interface AuthProps {
    userLogin: () => void,
    userLogout: () => void,
    auth: {
      isAuth: boolean
    }
}

export interface ConnectAuthProps {
    userLogin: () => void,
    userLogout: () => void,
}

export interface AuthState {
  auth: {}
}
