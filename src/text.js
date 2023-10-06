import React from "react";
import { useState, useEffect } from "react";

export const Section = () => {
  const [text, setText] = useState("");

  //The useEffect hook is called whenever there is a change/update in the useState
  useEffect(() => {
    console.log("mounted component");

    return () => {
      console.log("unmounted component");
    };
  }, []);

  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />

      <h3> {text} </h3>
    </div>
  );
};
