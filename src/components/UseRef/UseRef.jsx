import { useRef } from "react";

const UseRef = () => {
  const ref = useRef(null);
  const onClickHandler = () => {
    ref.current.focus();
    ref.current.value = "";
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="react useRef example"
        id=""
        ref={ref}
      />
      <button onClick={onClickHandler}>Click Here</button>
    </div>
  );
};

export default UseRef;
