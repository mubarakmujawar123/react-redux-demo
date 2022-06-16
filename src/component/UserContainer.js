import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser, sendUserData } from "../redux/user/userActions";
function UserContainer({ userData, fnFetchUser, fnSendUserData }) {
  useEffect(() => {
    fnFetchUser();
  }, []);
  return (
    <>
      <button onClick={fnSendUserData}>Send data</button>
      <br />
      {userData.loading ? (
        <div>Loding...</div>
      ) : userData.error ? (
        <div>{userData.error}</div>
      ) : (
        <div>
          <h2>User List</h2>
          <div>
            {userData &&
              userData.users &&
              userData.users.map((user, index) => (
                <p key={index}>{user.name}</p>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fnFetchUser: () => dispatch(fetchUser()),
    fnSendUserData: () => dispatch(sendUserData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
