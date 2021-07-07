import API from '../../../helper/endpoint.json';
import * as actionTypes from '../ActionType';

export const getTicketDetailAction = (payload) => async (dispatch, getState, api) => {
  dispatch(actionTypes.navdataInit());
  return api
    .get(API.navDataApi, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log('=============', res);
      dispatch(actionTypes.navdataSuccess(res));
    })
    .catch((error) => {
      dispatch(actionTypes.navdataError(error));
    });
};
