import './Gamer.css'

function Gamer({ gameover }: any) {
  return (
    <div className="game">
      <p className="ponits">
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a palavra: </h1>
      <h3 className="tip">
        Dica sobre a palavara: <span>Dica...</span>
      </h3>
      <p>Você ainda tem x tentativa(s)</p>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blackSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength={1} required/>
          <button>JOGAR!</button>
        </form>
        <div className="wrongLetterContainer">
          <p>Letras já utilizadas</p>
          <span>a, </span>
          <span>b, </span>
        </div>
      </div>

    </div>
  )
}

export default Gamer