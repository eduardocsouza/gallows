//Hooks
import { useState, useCallback, useEffect, FormEvent } from 'react';

//stylesheet
import './App.css';

//Components
import Start from './components/Start';
import Gamer from './components/Gamer';
import GameOver from './components/GameOver';

//data
import { wordsList } from './data/words';

const stage = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'gameover'}
];

interface WordCategory{
  word: string,
  category: string
}

function App() {

  const [gameStage, setGameStage] = useState<string>(stage[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState<string>("");
  const [pickedCategory, setPickedCategory] = useState<string>("");
  const [letters, setLetters] = useState<string[]>([]);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [guessed, setGuesseds] = useState<number>(3);
  const [score, setScore] = useState<number>(0);


  function clueRandor(): WordCategory{
    const categories: string[] = Object.keys(words);
    const category: string = categories[Math.floor(Math.random() * categories.length)];
   
    const word: string = words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);
    console.log(category)

    return {word, category};
  }

  function startGame(): void{   

    const {word, category} = clueRandor();
    let wordLetters: string[] = word.split("");
    
    wordLetters.map((val) => val.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    
    setGameStage(stage[1].name);
  };

  function verifyLetter(letter: string){
    const detailsLatter = letter.toLowerCase();
    
    if
      (guessedLetters.includes(detailsLatter) ||
       wrongLetters.includes(detailsLatter)
    ){
      return;
    }

    if(letters.includes(detailsLatter)){
      setGuessedLetters((prevGuessed) => [...prevGuessed, detailsLatter]);
    }else{
      setWrongLetters((prevWrong) => [...prevWrong, detailsLatter]);
    }

    console.log(guessedLetters);
    console.log(wrongLetters);

  };

  function retry(): void{
    setGameStage(stage[0].name);
  }
  
  return (
    <div className="App">
      {gameStage === 'start' && <Start start={startGame}/>}
      {gameStage === 'game' && 
      <Gamer 
        gameover={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        score={score}
        guessed={guessed}
      />}
      {gameStage === 'gameover' && <GameOver retry={retry}/>}
    </div>
  )
}

export default App;
