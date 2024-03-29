import { useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef(null);
  const onClickHandler = () => {
    ref.current.focus();
    ref.current.value = "";
  };
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="react useRef example"
        id=""
        ref={ref}
      />
      <button onClick={onClickHandler}>Click Here</button>
    </>
  );
}

export default App;
