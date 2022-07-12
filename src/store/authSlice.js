import { createSlice } from "@reduxjs/toolkit";
import { all, takeLatest } from "redux-saga/effects";

const initialState = {
  isLoggedIn: false,
  loading: false,
  email: "",
  password: "",
  rememberMe: false,
  error: "",
};

export const sliceKey = "auth";

const { actions, reducer } = createSlice({
  name: sliceKey,
  initialState,
  reducers: {
    loginRequest(state, { payload }) {
      state.loading = true;
      state.isLoggedIn = false;
      state.error = "";
      state.email = payload.email;
      state.password = payload.password;
      state.rememberMe = payload.rememberMe;
    },
    loginSuccess(state, {}) {
      state.loading = false;
      state.isLoggedIn = true;
      state.error = "";
    },
    loginError(state, { payload }) {
      state.loading = false;
      state.isLoggedIn = false;
      state.error = payload.error;
    },
    logout(state, {}) {
      state.loading = false;
      state.isLoggedIn = false;
      state.error = "";
    },
  },
});

export default reducer;

export const { loginRequest, loginSuccess, loginError, logout } = actions;

//sagas
const loginWorkerSaga = function* (action) {};

const logoutWorkerSaga = function* (action) {
  // const { navigate } = action;
  // localStorage.removeItem("authToken");
  // yield call(navigate, "/");
};

export const loginSagas = function* () {
  yield all([
    takeLatest(loginRequest, loginWorkerSaga),
    takeLatest(logout, logoutWorkerSaga),
  ]);
};
