//Hooks
import { useState, useCallback, useEffect } from 'react';

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
  const [latters, setLetters] = useState<string[]>([]);


  function clueRandor(): |WordCategory{
    const categories: string[] = Object.keys(words);
    const category: string = categories[Math.floor(Math.random() * categories.length)];
   
    const word: string = words[category][Math.floor(Math.random() * words[category].length)];

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

  function verifyLetter(): void{
    setGameStage(stage[2].name);
  };

  function retry(): void{
    setGameStage(stage[0].name);
  }
  
  return (
    <div className="App">
      {gameStage === 'start' && <Start start={startGame}/>}
      {gameStage === 'game' && <Gamer gameover={verifyLetter}/>}
      {gameStage === 'gameover' && <GameOver retry={retry}/>}
    </div>
  )
}

export default App;
