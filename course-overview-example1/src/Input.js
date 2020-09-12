import React, { useState } from "react";

function Input() {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      {text}
    </div>
  );
}

export default Input;
