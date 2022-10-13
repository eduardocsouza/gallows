import "./GameOver.css";

function GamerOver({retry}: any) {
  return (
    <div>
      <h1>GAME OVER</h1>
      <button id="retry-btn" onClick={retry}>Retry Game</button>
    </div>
  )
}

export default GamerOver