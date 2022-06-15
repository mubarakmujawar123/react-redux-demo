import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/userActions";
function UserContainer({ userData, fnFetchUser }) {
  useEffect(() => {
    fnFetchUser();
  }, []);
  return userData.loading ? (
    <div>Loding...</div>
  ) : userData.error ? (
    <div>{userData.error}</div>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user, index) => <p key={index}>{user.name}</p>)}
      </div>
    </div>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
