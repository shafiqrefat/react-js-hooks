import { useReducer } from "react";
import "./App.css";

const initialState = {
  value: 0,
  showText: true,
};
function App() {
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
  const [state, dispatch] = useReducer(reducer, initialState);
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
}

export default App;
