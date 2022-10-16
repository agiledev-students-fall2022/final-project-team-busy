import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  testDecrement,
  testIncrement,
  testIncrementByAmount,
} from "../features/user/userSlice";

function ReduxExample() {
  const [incValue, setIncValue] = useState(0);
  // useSelector to access a value from global state
  const user = useSelector((state) => state.user);
  // useDispatch to use an action to update a value from global state
  const dispatch = useDispatch();

  const onIncChange = (e) => setIncValue(+e.target.value);
  const onSubmitIncrement = (e) => {
    e.preventDefault();
    dispatch(testIncrementByAmount(incValue));
  };

  return (
    <>
      <h2>Redux Example</h2>
      <p>Test value: {user.testValue}</p>
      <button onClick={() => dispatch(testDecrement())}>- Decrement</button>
      <button onClick={() => dispatch(testIncrement())}>+ Increment</button>

      <form action="" onSubmit={onSubmitIncrement}>
        <span>Increment by a value </span>
        <input type="number" value={incValue} onChange={onIncChange} />
        <button>Submit</button>
      </form>
    </>
  );
}
export default ReduxExample;
