import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  const buyCakeHandler = () => {
    if (props.numberOfCakes < number || number <= 0) {
      return;
    }
    props.buyCake(number);
  };
  return (
    <div>
      <h2>Number of cakes in Container : {props.numberOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={buyCakeHandler}>Buy {number} Cake</button>
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
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
