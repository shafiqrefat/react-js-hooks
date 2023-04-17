import React, { useState } from "react";

const UseState = () => {
  const [field, setField] = useState("");
  const handleSubmit = (e) => {
    setField(e.target.value);
  };
  return (
    <div className="App">
      <input
        type="text"
        name="name"
        id=""
        onChange={handleSubmit}
        placeholder="Write whatever you want"
      />
      <p>{field}</p>
    </div>
  );
};

export default UseState;
