import React, { useState } from 'react';

function App() {

  const [word, setWord] = useState(''); // the word that shows up

  function RenderKeyboard() { // create the keyboard
    const alphabet = 'abcdefghijklmnopqrstuvwxyz_<';

    return Array.from(alphabet).map((letter, index) => ( // loop through the alphabet and make buttons
      <button
        key={index}
        onClick={() => handleKeyboard(letter)}
      >
        {letter}
      </button>
    ));
  };

  function handleKeyboard(letter) { // handle key presses
    // add the appropriate character
    if (letter === "_") { // space
      setWord(word + " ");
    } else if (letter === "<") { // backspace
      setWord(word.slice(0, -1));
    } else { // everything else
      setWord(word + letter);
    }
  }
  
  return (
    <div>
      <p>{word}</p>
      <div className="keyboard">
        <RenderKeyboard />
      </div>
    </div>
  );
}

export default App;
