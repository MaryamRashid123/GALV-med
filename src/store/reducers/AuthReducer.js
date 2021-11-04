import { USER_ACTIONS } from '../../constants/ActionKeys';

let initialState = {
  loading: false,
  error:false,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {

  // Authentication
  case USER_ACTIONS.LOGIN_REQUEST:
    return { 
      ...state,
      loading: true,
      error: false
    };

  case USER_ACTIONS.LOGIN_SUCCESS:
    return { 
      ...state,
      loading:false,
      error: false
    };

  case USER_ACTIONS.LOGIN_FAILURE:
    return { 
      ...state,
      loading:false,
      error: true
    };

  default:
    return state;
  }
};

export default Auth;