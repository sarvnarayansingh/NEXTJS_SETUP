import * as actionConstant from '../ActionConstant';
export const navdataInit = () => ({ type: actionConstant.NAV_DATA_INIT });
export const navdataSuccess = (payload) => {
  console.log('payload===========', payload);
  return { type: actionConstant.NAV_DATA_SUCCESS, payload };
};
export const navdataError = (payload) => ({ type: actionConstant.NAV_DATA_ERROR, payload });
