import { DUMMY_ACTIONS } from '../../constants/ActionConstants';
//import { deleteListingRecord, updateListingRecord } from "../../helpers/GeneralHelper";

let initialState = {
  loading: false,
  list:null,
  error:false,
};

const dummyReducer = (state = initialState, action) => {
  switch (action.type) {
  // Get dead reject for animal 
  case DUMMY_ACTIONS.GET_DUMMY_REQUEST:
    return { 
      ...state,
      loading: true
    };

  case DUMMY_ACTIONS.GET_DUMMY_SUCCESS:
    return { 
      ...state,
      loading:false,
    };

  case DUMMY_ACTIONS.GET_DUMMY_FAILURE:
    return { 
      ...state,
      loading:false,
      error:true
    };

  default:
    return state;
  }
};

export default dummyReducer;