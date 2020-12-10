// import {clearToken, saveToken} from "@utils/token";
import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

// state
export const INITIAL_STATE = Immutable({
    fetching: false,
    type: null,
});

// actions
const { Types, Creators } = createActions({
    getType: ["payload", "token"],
    getTypeSuccess: ["data"],
    getTypeFailure: ["error"],
});

export const ProductTypes = Types;
// export default Creators

// reducers
export const getType = (state, { payload }) => state.merge({ fetching: false });
export const getTypeSuccess = (state, { payload }) => state.merge({ fetching: true, type: payload });
export const getTypeFailure = (state, { payload }) => state.merge({ fetching: true });

// bind reducers actions

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_TYPE]: getType,
    [Types.GET_TYPE_SUCCESS]: getTypeSuccess,
    [Types.GET_TYPE_FAILURE]: getTypeFailure,
});
