import React from "react";
import { connect } from "react-redux";
import { buy_icecream } from "../redux/iceCream/iceCreamActions";

function IceCreamContainer(props) {
  const buyIceCreamHandler = () => {
    if (props.numberOfIceCream <= 0) {
      return;
    }
    props.buyIceCream();
  };
  return (
    <div>
      <h2>Number of Icecream: {props.numberOfIceCream}</h2>
      <br />
      <button onClick={buyIceCreamHandler}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfIceCream: state.iceCream.numberOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buy_icecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
