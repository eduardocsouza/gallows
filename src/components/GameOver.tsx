import "./GameOver.css";

function GamerOver({retry, score, pickedWord, wrongLetters}: any) {
  return (
    <div className="container-gamer">
      {wrongLetters.length >= 3 
      ?
      (<h1>GAME OVER</h1>)
      :
      (<h1>CONGRATULATIONS</h1>)  
    }
      
      <div className="play-score">
        <p>Sua pontuação:
          <span> {score}</span>          
        </p>
        <p>A palavra era:
          <span> {pickedWord}</span>
        </p>
      </div>
      <button id="retry-btn" onClick={retry}>Retry Game</button>
    </div>
  )
}

export default GamerOver