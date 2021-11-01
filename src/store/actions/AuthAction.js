// Service
import service from '../../services/api/Service';
import StorageService from '../../services/StorageService';

// Constatns
import { USER_ACTIONS } from '../../constants/ActionConstants';
import { API_URLS } from '../../constants/UrlConstants';

// General
import { request, success, failure } from '.';

function login(loginModel) {
  return async (dispatch) => {
    try {
      dispatch(request(USER_ACTIONS.LOGIN_REQUEST));

      // API Calling
      const response = await service.postService(
        API_URLS.AUTHENTICATE,
        loginModel
      );

      dispatch(success(USER_ACTIONS.LOGIN_SUCCESS, response));
      console.log(response);
      return response;
    } catch (error) {
      dispatch(failure(USER_ACTIONS.LOGIN_FAILURE, error));
      throw error;
    }
  };
}

// function logout() {
//   return async (dispatch) => {
//     try {
//       dispatch(request(USER_ACTIONS.LOGOUT_REQUEST));
//       await deleteLocalData();
//       dispatch(success(USER_ACTIONS.LOGOUT_SUCCESS));
//     } catch (error) {
//       console.log(error);
//       dispatch(failure(USER_ACTIONS.LOGOUT_FAILURE, error));
//       throw error;
//     }
//   };
// }

export {
  login,
  // logout,
};
