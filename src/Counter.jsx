import { connect } from "react-redux";

const Counter = ({ dispatch, count, edit }) => {
  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const editCount = (active) =>
    dispatch({ type: "EDIT_COUNT", payload: active });
  return (
    <>
      <p>The count is: {count}</p>
      {edit ? (
        <>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={() => editCount(false)}>Save</button>
        </>
      ) : (
        <button onClick={() => editCount(true)}>Edit</button>
      )}
    </>
  );
};

export default connect((state) => ({
  count: state.counter.count,
  edit: state.counter.edit
}))(Counter);
