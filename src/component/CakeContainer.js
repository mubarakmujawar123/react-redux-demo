import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
function CakeContainer(props) {
  const buyCakeHandler = () => {
    if (props.numberOfCakes <= 0) {
      return;
    }
    props.buyCake();
  };
  return (
    <div>
      <h2>Number of cakes in Container : {props.numberOfCakes}</h2>
      <button onClick={buyCakeHandler}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
