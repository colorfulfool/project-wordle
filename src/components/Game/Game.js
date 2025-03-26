import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form';
import Guesses from '../Guesses';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [state, setState] = React.useState("PLAYING");

  const onGuessSubmitted = (guess) => {
    if (guess === answer) {
      setState("WON");
      return;
    }

    if (guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setState("LOST");
      return;
    }

    setGuesses([...guesses, guess]);
  }

  return (
    <>
      {state === "WON" && <HappyBanner numGuesses={guesses.length} />}
      {state === "LOST" && <SadBanner answer={answer} />}
      <Guesses guesses={guesses} answer={answer} />
      <Form onGuessSubmitted={onGuessSubmitted} isDisabled={state !== "PLAYING"} />
    </>
  );
}

export default Game;
