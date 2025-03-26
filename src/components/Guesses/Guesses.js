import React from "react";
import { range } from "../../utils.js";
import { checkGuess } from "../../game-helpers.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import Guess from "../Guess";

function Guesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <Guess
          key={guesses[index] ?? index}
          guess={guesses[index] ? checkGuess(guesses[index], answer) : []}
        />
      ))}
    </div>
  );
}

export default Guesses;
