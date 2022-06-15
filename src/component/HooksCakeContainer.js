import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";
function HooksCakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const buyCakeHandler = () => {
    if (numberOfCakes <= 0) {
      return;
    }
    dispatch(buyCake());
  };
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button onClick={buyCakeHandler}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
