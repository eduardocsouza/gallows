import { ChangeEvent, useState, useRef} from 'react'
import './Gamer.css'

function Gamer({ gameover, pickedCategory, letters, score, guessed, guessedLetters, wrongLetters}: any){


  const [letter, setLetter] = useState<string>("");
  const letterInpuRef = useRef<HTMLInputElement>(null);

  
  function handleSubmit(e: ChangeEvent<HTMLFormElement>): void{
    e.preventDefault();

    gameover(letter);

    setLetter("");

    letterInpuRef.current!.focus();
  }

  return (
    <div className="game">
      <p className="ponits">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra: </h1>
      <h3 className="tip">
        Dica sobre a palavara: <span>{pickedCategory}</span>
      </h3>
      <p className='try'>Você ainda tem {guessed} tentativa(s)</p>
      <div className="wordContainer">
        {letters.map((valor:string, i:number) => (
          guessedLetters.includes(valor)
          ?
          (<span key={i} className="letter">{valor}</span>)
          :
          (<span key={i} className="blackSquare"></span>)
        ))}
        
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="letter" 
            maxLength={1} 
            required
            onChange={(e: ChangeEvent<HTMLInputElement>)=>setLetter(e.target.value)}
            value={letter}
            ref={letterInpuRef}/>
          <button>JOGAR!</button>
        </form>
        <div className="wrongLetterContainer">
          <p>Letras já utilizadas</p>
          {wrongLetters.map((valor:string, indx:number) =>(
            <span key={indx}>{valor}, </span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Gamer