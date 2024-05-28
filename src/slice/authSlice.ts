import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthState } from "../types/user.types";



export const githubUserLogin = () => async (dispatch: Dispatch) => {

  const provider = new GithubAuthProvider();
  provider.addScope("gist");
  const auth = getAuth();

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential!.accessToken;
      if (!token) return;
      const user = result.user;
      dispatch(userLogin({
        displayName: user.displayName,
        token,
        imageURL: user.photoURL
      }));
    })
    .catch((error) => {
      console.log(error);
      
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
      console.log("setting state to true")
      state.loggedIn = true;
      state.userData = {
        displayName: action.payload.displayName,
        imageURL: action.payload.imageURL,
      }
      state.dataLoaded = true
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(state.userData));
      localStorage.setItem('token', action.payload.token);
    },
    userLogout: (state) => {
      state.loggedIn = false
    }
  },
});

export const { userLogin, userLogout } = authSlice.actions;


export default authSlice.reducer