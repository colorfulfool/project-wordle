import React from 'react';

function Form({ onGuessSubmitted, isDisabled }) {
  const [guess, setGuess] = React.useState("");

  const onChange = (event) => {
    setGuess(event.target.value.toUpperCase());
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setGuess("");
    onGuessSubmitted(guess);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="\w{5}"
        value={guess}
        onChange={onChange}
        disabled={isDisabled}
      />
    </form>
  );
}

export default Form;
