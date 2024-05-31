import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthState } from "../types/user.types";
import axiosInstacne from "../api/axios";



export const githubUserLogin = () => async (dispatch: Dispatch) => {

  const provider = new GithubAuthProvider();
  provider.addScope("gist");
  const auth = getAuth();

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential!.accessToken;
      if (!token) return;
      axiosInstacne.get("user", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then((response) => {
        if (response.status === 200) {
          const data = response.data
          dispatch(userLogin({
            displayName: data.name,
            token,
            imageURL: data.avatar_url,
            userId: data.id,
            htmlURL: data.html_url,
            username: data.login
          }));
        }
      })
    })
    .catch((_error) => {
      
    })
    .finally(() => {
    });
};

const initialState: AuthState = {
  loggedIn: localStorage.getItem("loggedIn") !== null ? localStorage.getItem("loggedIn") === "true" : false,
  userData: localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user')!)
  : null,
  dataLoaded: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.loggedIn = true;
      state.userData = {
        htmlURL: action.payload.htmlURL,
        username: action.payload.username,
        displayName: action.payload.displayName,
        imageURL: action.payload.imageURL,
        userId: action.payload.userId
      }
      state.dataLoaded = true
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(state.userData));
      localStorage.setItem('token', action.payload.token);
    },
    userLogout: (state) => {
      state.loggedIn = false
      localStorage.removeItem("loggedIn")
      localStorage.removeItem("user")
      localStorage.removeItem("token")
    }
  },
});

export const { userLogin, userLogout } = authSlice.actions;


export default authSlice.reducer