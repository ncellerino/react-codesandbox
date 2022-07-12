import { combineReducers } from "redux";
import authReducer, { sliceKey as authSliceKey } from "./authSlice";

const reducer = combineReducers({
  [authSliceKey]: authReducer, // 'authentications'
});

export default reducer;
