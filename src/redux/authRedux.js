// import {clearToken, saveToken} from "@utils/token";
import {createActions, createReducer} from "reduxsauce";
import Immutable from "seamless-immutable";

// state
export const INITIAL_STATE = Immutable({
  fetching: false,
  loginError: null,
  token: null,
  profile: null,
  module: null,
  company: null,
  claims: null,
  selfFetching: false,
  bThirdLogin: false,
});

// actions
const {Types, Creators} = createActions({
  login: ["name", "password"],
  loginSuccess: ["profile"],
  loginFailure: ["error"],
  logout: [],
  restoreAuth: ["payload"],
  register: ["mobile", "password", "sms"],
  registerSuccess: ["profile"],
  registerFailure: ["error"],

  getSelf: ["payload", "token"],
  getSelfSuccess: ["data"],
  getSelfFailure: ["error"],

  thirdLogin: ["payload", "token"],
  thirdLoginSuccess: ["data"],
  thirdLoginFailure: ["error"],
});

export const AuthTypes = Types;
// export default Creators

// reducers
export const login = (state, {payload}) => state.merge({fetching: true, loginError: null});
export const loginSuccess = (state, {payload}) => {
  var appModule = "0";
  if (payload && payload.company && payload.company.type && payload.company.state.toLowerCase() === "normal") {
    appModule = payload.company.type.toLowerCase();
  }
  const user = (payload && payload.user) || {};
  const company = (payload && payload.company) || {};
  const claims = payload && payload.claims;
  // saveToken({...payload, user, company, claims, module: appModule}).then();
  return state.merge({
    fetching: false,
    loginError: null,
    token: payload && payload.token,
    profile: user,
    claims,
    company,
    module: appModule,
  });
};
export const loginFailure = (state, {payload}) => state.merge({fetching: false, loginError: payload});

export const logout = (state, _) => {
//   clearToken().then();
  return state.merge({token: null, profile: null, module: null, company: null, claims: null});
};
export const restoreAuth = (state, {payload}) => {
  let user = {};
  if (payload && payload.token) {
    user.token = payload.token;
  }
  if (payload && payload.profile) {
    user.profile = payload.profile;
  }
  if (payload && payload.company) {
    user.company = payload.company;
  }
  if (payload && payload.claims) {
    user.claims = payload.claims;
  }
  if (payload && payload.module) {
    user.module = payload.module;
  }
  return state.merge({...user});
};

export const register = (state, {payload}) => state.merge({fetching: true, loginError: null});
export const registerSuccess = (state, {payload}) => {
//   saveToken(payload).then();
  return state.merge({fetching: false, loginError: null, token: payload && payload.token, profile: payload.user});
};
export const registerFailure = (state, {payload}) => state.merge({fetching: false, loginError: payload});

export const getSelf = (state, {payload}) => state.merge({selfFetching: true});
export const getSelfSuccess = (state, {payload}) => state.merge({selfFetching: false, profile: payload});
export const getSelfFailure = (state, {payload}) => state.merge({selfFetching: false});

export const thirdLogin = (state, {payload}) => state.merge({bThirdLogin: false});
export const thirdLoginSuccess = (state, {payload}) => state.merge({bThirdLogin: true});
export const thirdLoginFailure = (state, {payload}) => state.merge({bThirdLogin: false});

// bind reducers actions

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.LOGOUT]: logout,
  [Types.RESTORE_AUTH]: restoreAuth,
  [Types.REGISTER]: register,
  [Types.REGISTER_SUCCESS]: registerSuccess,
  [Types.REGISTER_FAILURE]: registerFailure,

  [Types.GET_SELF]: getSelf,
  [Types.GET_SELF_SUCCESS]: getSelfSuccess,
  [Types.GET_SELF_FAILURE]: getSelfFailure,

  [Types.THIRD_LOGIN]: thirdLogin,
  [Types.THIRD_LOGIN_SUCCESS]: thirdLoginSuccess,
  [Types.THIRD_LOGIN_FAILURE]: thirdLoginFailure,
});
