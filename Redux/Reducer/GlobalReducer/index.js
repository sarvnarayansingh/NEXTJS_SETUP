import * as actionConstant from '../../Actions/ActionConstant';
const initialState = {
  globalStore: null
};
export const GlobalReducer = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
  case actionConstant.NAV_DATA_INIT:
    return {
      ...state
    };
  case actionConstant.NAV_DATA_SUCCESS:
    return {
      ...state,
      globalStore: action.payload
    };
  case actionConstant.NAV_DATA_ERROR:
    return {
      ...state,
      globalStore: action.payload
    };
  default:
    return state;
  }
};
