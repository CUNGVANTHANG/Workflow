import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";
import { RootState, AppDispatch } from "../store/store";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value); // Lấy giá trị counter từ state
  const dispatch: AppDispatch = useDispatch(); // Hàm dispatch

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;
