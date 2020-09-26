import React, { useState } from "react";

function Input() {
  const [text, setText] = useState("");
  return (
    <>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      {text}
    </>
  );
}

export default Input;
