//Hooks
import { useState, useEffect} from 'react';

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

    return {word, category};
  }

  function startGame(): void{   

    const {word, category} = clueRandor();
    let wordLetters: string[] = word.split("");
    
    const lttrs = wordLetters.map((val) => val.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(lttrs);

    setGameStage(stage[1].name);

    
  };

  function verifyLetter(letter: string){
    const detailsLatter = letter.toLowerCase();
    
    if
      (guessedLetters.includes(detailsLatter) ||
       wrongLetters.includes(detailsLatter)
    ){
      alert('Essa letra já foi utilizada!')
    }

    if(letters.includes(detailsLatter)){
      setGuessedLetters((prevGuessed) => [...prevGuessed, detailsLatter]);
      setScore(score + 50);
    }else{ 
      setWrongLetters((prevWrong) => [...prevWrong, detailsLatter]);
      setGuesseds((prevGuesseds) => prevGuesseds -1);     
    }     

  };

  useEffect(() =>{

    if(guessed <= 0){
      setGameStage(stage[2].name);
    }

  }, [guessed]);

  useEffect(() =>{

    if(guessedLetters.length != 0 && guessedLetters.length === letters.length){
      setGameStage(stage[2].name);
    }
    
  }, [score]);

  function retry(): void{
    setGuesseds(3);
    setScore(0);
    setGuessedLetters([]);
    setWrongLetters([]);
    setGameStage(stage[0].name);
  }
  
  return (
    <div className="App">
      {gameStage === 'start' && <Start start={startGame}/>}
      {gameStage === 'game' && 
      <Gamer 
        gameover={verifyLetter} 
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        score={score}
        guessed={guessed}
      />}
      {gameStage === 'gameover' 
      && <GameOver retry={retry} score={score} pickedWord={pickedWord} wrongLetters={wrongLetters}/>}
    </div>
  )
}

export default App;
