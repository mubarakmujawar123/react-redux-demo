import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
import { buy_icecream } from "../redux/iceCream/iceCreamActions";
function ItemContainer(props) {
  return (
    <div>
      <h2>Item : {props.item}</h2>
      <button onClick={props.buyItem}>Buy item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemCount = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCream;

  return {
    item: itemCount,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buy_icecream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
