import React from "react";

function HappyBanner({ numGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{numGuesses}</strong> guesses
      </p>
    </div>
  );
}

export default HappyBanner;
