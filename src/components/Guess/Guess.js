import React from "react";
import clsx from "clsx";
import { range } from "../../utils.js";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((_, index) => (
        <span key={index} className={clsx("cell", guess[index]?.status)}>
          {guess[index]?.letter}
        </span>
      ))}
    </p>
  )
}

export default Guess;
