// import {clearToken, saveToken} from "@utils/token";
import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

// state
export const INITIAL_STATE = Immutable({
    fetching: false,
    type: null,
    product: null,
    productFetching: false,
});

// actions
const { Types, Creators } = createActions({
    getType: ["payload", "token"],
    getTypeSuccess: ["data"],
    getTypeFailure: ["error"],

    getProduct: ["payload", "token"],
    getProductSuccess: ["data"],
    getProductFailure: ["error"],

    getHome: ["payload", "token"],
    getHomeSuccess: ["data"],
    getHomeFailure: ["error"],

    getSearch: ["payload", "token"],
    getSearchSuccess: ["data"],
    getSearchFailure: ["error"],
});

export const ProductTypes = Types;
// export default Creators
function getChild(id, obj) {
    let b = [];
    obj.map((v, i) => {
        if (v.id === id) {
            b.push(v);
        }
    })
    return b;
}
function unique(arr, val) {
    const res = new Map();
    return arr.filter(item => !res.has(item[val]) && res.set(item[val], 1))
}
function compare(property, desc) {
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        if (desc == true) {
            // 升序排列
            return value1 - value2;
        } else {
            // 降序排列
            return value2 - value1;
        }
    }
}
function exChangeData(data) {
    if (!data) return;
    let type_id = data.reduce((pre, cur) => [
        ...pre,
        {
            id: cur.type_id,
            type_name: cur.type_name,
            type_name_en: cur.type_name_en
        }
    ], [])
    type_id = unique(type_id, 'id')

    // type_id = Array.from(new Set(type_id))
    // type_id.sort()  //type_id去重排序后
    type_id.sort(compare('id', true))

    let newData = [];
    type_id.map((o, i) => {
        newData.push({
            id: o.id,
            type_name: o.type_name,
            type_name_en: o.type_name_en,
            project: getChild(o.id, data),
        })
    })

    return newData
}
// reducers
export const getType = (state, { payload }) => state.merge({ fetching: false });
export const getTypeSuccess = (state, { payload }) => state.merge({ fetching: true, type: payload && payload.data });
export const getTypeFailure = (state, { payload }) => state.merge({ fetching: true });

export const getProduct = (state, { payload }) => state.merge({ productFetching: false });
export const getProductSuccess = (state, { payload }) => state.merge({
    productFetching: true,
    product: payload && exChangeData(payload.data)
});
export const getProductFailure = (state, { payload }) => state.merge({ productFetching: true });

export const getHome = (state, { payload }) => state.merge({ productFetching: false });
export const getHomeSuccess = (state, { payload }) => state.merge({
    productFetching: true,
    product: payload && payload.data
});
export const getHomeFailure = (state, { payload }) => state.merge({ productFetching: true });

export const getSearch = (state, { payload }) => state.merge({ productFetching: false });
export const getSearchSuccess = (state, { payload }) => state.merge({
    productFetching: true,
    product: payload && payload.data && exChangeData(payload.data.project)
});
export const getSearchFailure = (state, { payload }) => state.merge({ productFetching: true });
// bind reducers actions

export const reducer = createReducer(INITIAL_STATE, {
    [Types.GET_TYPE]: getType,
    [Types.GET_TYPE_SUCCESS]: getTypeSuccess,
    [Types.GET_TYPE_FAILURE]: getTypeFailure,
    [Types.GET_PRODUCT]: getProduct,
    [Types.GET_PRODUCT_SUCCESS]: getProductSuccess,
    [Types.GET_PRODUCT_FAILURE]: getProductFailure,
    [Types.GET_HOME]: getHome,
    [Types.GET_HOME_SUCCESS]: getHomeSuccess,
    [Types.GET_HOME_FAILURE]: getHomeFailure,
    [Types.GET_SEARCH]: getSearch,
    [Types.GET_SEARCH_SUCCESS]: getSearchSuccess,
    [Types.GET_SEARCH_FAILURE]: getSearchFailure,
});
