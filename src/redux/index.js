import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import {AuthTypes} from "./authRedux";

export const reducers = combineReducers({
    auth: require("./authRedux").reducer,
    
  });
const rootReducer = (state, action) => {
    if (action.type === AuthTypes.LOGOUT) {
      state = undefined;
    }
    return reducers(state, action);
  };
  
  export default () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
  };