// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="container">
      <article className="no-padding primary-container responsive round">
        <img
          id="audio-image"
          className="primary responsive small top-round"
          src="img/abuela-cascos.svg"
          style={{objectFit: 'contain'}}
        />
        <div className="padding bottom-round white">
          <h5 id="audio-title">Play Well Abuela</h5>
          <p className="left-align" id="audio-description">
            El reproductor de audio que hasta tu abuela sabrá utilizar!
            Selecciona un audio y dale al play!
          </p>
          <nav className="center-align">
            <audio
              id="audio-player"
              src=""
              controls
              preload="auto"
              style={{ width: '80%' }}
            ></audio>
            <button
              // onClick="changePlayBackRate()"
              id="playback-rate-btn"
              className="circle large medium-elevate"
            >
              1x
            </button>
          </nav>
        </div>
      </article>
      <article className="primary responsive">
        <h6 className="small bold center-align no-margin">
          Últimos episodios de Web Reactiva
        </h6>
      </article>
      <article className="tertiary responsive" id="episodes-list"></article>
    </main>
  )
}

export default App
