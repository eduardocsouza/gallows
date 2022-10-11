import './Start.css'

function Start({ start }: any) {
  return (
    <div className="start">
        <h1>Gallows</h1>
        <p>Click no botão para iniciar</p>
        <button onClick={start}>PLAY</button>
    </div>
  )
}

export default Start