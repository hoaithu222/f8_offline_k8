import { decrement, increment } from "../store/actions/counterAction";
import { useDispatch, useSelector } from "../store/hook";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
