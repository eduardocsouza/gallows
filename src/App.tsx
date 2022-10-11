//Hooks
import { useState, useCallback, useEffect } from 'react';

//stylesheet
import './App.css';

//Components
import Start from './components/Start';
import Gamer from './components/Gamer';
import GamerOver from './components/GamerOver';

//data
import { wordsList } from './data/words';

const stage = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'gameover'}
];

function App() {

  const [gameStage, setGameStage] = useState(stage[0].name);
  const [words] = useState(wordsList);

  function startGame(): void{
    setGameStage(stage[1].name);
  }
  
  return (
    <div className="App">
      {gameStage === 'start' && <Start start={startGame}/>}
      {gameStage === 'game' && <Gamer />}
      {gameStage === 'gameover' && <GamerOver />}
    </div>
  )
}

export default App
