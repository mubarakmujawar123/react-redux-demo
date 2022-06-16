import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userTypes";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

//function for action creator //thunk //which return new function and we can pass dispatch inside it

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => dispatch(fetchUserFailure(error.message)));
  };
};
//set/post data
export const sendUserData = () => {
  return (dispatch) => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        id: 1,
        name: "abc",
      })
      .then((response) => console.log(response.status))
      .catch((error) => dispatch(fetchUserFailure(error.message)));
  };
};
