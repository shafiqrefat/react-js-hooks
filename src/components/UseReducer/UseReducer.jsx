import { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { value: state.value + 1, showText: state.showText };
      case "toogleShowText":
        return { value: state.value, showText: !state.showText };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    value: 0,
    showText: true,
  });
  return (
    <>
      <h1>{state.value}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toogleShowText" });
        }}
      >
        Increase Value
      </button>
      {state.showText && <h2>This is toggle text</h2>}
    </>
  );
};

export default UseReducer;
