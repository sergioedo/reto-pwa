/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const EpisodeListElement = ({ episode }) => {
     
      // // Si aun no esta cacheado el audio, lo descargamos para que esté disponible offline
      // isFileCached(episode.download_url, cacheName).then((cached) => {
      //   console.log({ url: episode.download_url, cached });
      //   if (cached) {
      //     iStatus.textContent = "smartphone";
      //     iStatus.classList.add("tertiary-text");
      //     bStatus.classList.add("secondary");
      //   } else {
      //     iStatus.textContent = "download_for_offline";
      //   }
      // });

      // bPlay.addEventListener("click", function (event) {
      //   event.preventDefault();
      //   playAudio(episode.download_url);
      // });

      // linkText.addEventListener("click", function (event) {
      //   event.preventDefault();
      //   selectAudio(episode.download_url);
      // });

      // // Agrega el listener de eventos para el doble clic
      // bStatus.addEventListener("click", function (event) {
      //   event.preventDefault();
      //   // Si aun no esta cacheado el audio, lo descargamos para que esté disponible offline
      //   isFileCached(episode.download_url, cacheName).then((cached) => {
      //     if (!cached) {
      //       iStatus.textContent = "cloud_sync";
      //       fetch(episode.download_url).then((data) => {
      //         console.log("Episodio descargado..." + episode.download_url);
      //         iStatus.textContent = "smartphone";
      //         iStatus.classList.add("tertiary-text");
      //         bStatus.classList.add("secondary");
      //       });
      //     }
      //   });
      // });

      return (
      <div className='row'>
        <button id={"play_button_" + episode.episode_id} className='circle small'>
          <i id ={"play_icon_" + episode.episode_id}>play_circle</i>
        </button>
        <a className='col max wave' id = {"episode_" + episode.episode_id}>
          {episode.title}
        </a>
        <button className='circle small'>
          <i>download_for_offline</i>
        </button>
      </div>
      )
    };

function App() {
  // Estado
  const [episodes, setEpisodes] = useState({});

  // Inicialización de la app
  useEffect(() => {
    // let playbackRate = 1;
    // let selectedAudio;
    // const cacheName = "pwa-abuela-cache";

    // const changePlayBackRate = () => {
    //   if (playbackRate === 1) {
    //     playbackRate = 2;
    //   } else {
    //     playbackRate = 1;
    //   }
    //   audioPlayer.playbackRate = playbackRate; //si se esta reproduciendo
    //   audioPlayer.oncanplay = function () {
    //     //si no se está reproduciendo
    //     audioPlayer.playbackRate = playbackRate;
    //   };
    //   document.getElementById("playback-rate-btn").textContent =
    //     playbackRate + "x";
    // };

    // // Check if a file is cached by a service worker
    // function isFileCached(fileUrl, cacheName) {
    //   return caches
    //     .open(cacheName)
    //     .then(function (cache) {
    //       return cache.match(fileUrl);
    //     })
    //     .then(function (response) {
    //       if (response) {
    //         console.log(`File ${fileUrl} is cached!`);
    //         return true;
    //       } else {
    //         console.log(`File ${fileUrl} is NOT cached!`);
    //         return false;
    //       }
    //     });
    // }

    // const setPlayListStatus = ({ episode_id }) => {
    //   // ponemos todos los botones de play
    //   var buttons = document
    //     .getElementById("episodes-list")
    //     .querySelectorAll("button");
    //   buttons.forEach((button) => {
    //     if (button.id.indexOf("play_button") >= 0) {
    //       button.classList.remove("secondary");
    //     }
    //     // activamos el micro en el episodio seleccionado (bg-color)
    //     if (button.id === `play_button_${episode_id}`) {
    //       button.classList.add("secondary");
    //     }
    //   });
    //   var icons = document
    //     .getElementById("episodes-list")
    //     .querySelectorAll("i");
    //   icons.forEach((icon) => {
    //     if (icon.textContent === "mic") {
    //       icon.textContent = "play_circle";
    //       icon.classList.remove("black-text");
    //     }
    //     // activamos el micro en el episodio seleccionado (icono)
    //     if (icon.id === `play_icon_${episode_id}`) {
    //       icon.textContent = "mic";
    //       icon.classList.add("black-text");
    //     }
    //   });
    // };

    // Realizar la llamada a la API, para cargar los últimos 10 episodios
    fetch("https://api.spreaker.com/v2/shows/2676652/episodes?limit=10")
      .then((response) => response.json())
      .then((data) => {
        const episodes = data.response.items;
        setEpisodes(episodes);        
      })
    
    //     //forzamos a settear el estado en la lista
    //     if (selectedAudio) selectAudio(selectedAudio);
    //   })
    //   .catch((error) => {
    //     console.error("Error al obtener los episodios:", error);
    //   });

    // const audioPlayer = document.getElementById("audio-player");

    // // Función para guardar una clave-valor en el almacenamiento
    // function idxDBSet(key, value) {
    //   idbKeyval
    //     .set(key, value)
    //     .then(() => {
    //       console.log("Valor guardado en el almacenamiento");
    //     })
    //     .catch((error) => {
    //       console.error("Error al guardar el valor:", error);
    //     });
    // }

    // // Función para recuperar el valor de una clave del almacenamiento
    // function idxDBGet(key, callback) {
    //   idbKeyval
    //     .get(key)
    //     .then((value) => {
    //       callback(value);
    //     })
    //     .catch((error) => {
    //       console.error(
    //         "Error al leer el valor de audio seleccionado:",
    //         error
    //       );
    //       callback(null, error);
    //     });
    // }

    // const setMetadata = (episode) => {
    //   if (episode && "mediaSession" in navigator) {
    //     const player = document.querySelector("audio");

    //     navigator.mediaSession.metadata = new MediaMetadata({
    //       title: episode.title,
    //       artist: "Daniel Primo",
    //       album: "Web Reactiva",
    //       artwork: [
    //         {
    //           src: episode.image_url,
    //           sizes: "160x160",
    //           type: "image/jpeg",
    //         },
    //       ],
    //     });

    //     const audioTitle = document.getElementById("audio-title");
    //     audioTitle.textContent = episode.title.split(":")[0];
    //     const audioDescription = document.getElementById("audio-description");
    //     audioDescription.textContent = episode.title.split(":")[1];
    //     const audioImage = document.getElementById("audio-image");
    //     audioImage.src = episode.image_url;
    //   }
    // };

    // const selectAudio = (value) => {
    //   selectedAudio = value;
    //   audioPlayer.src = value;
    //   //guardamos el audio seleccionado
    //   idxDBSet("selectedAudio", value);
    //   //añadimos los metadatos, para que se muestren con pantalla bloqueada
    //   const episode = episodesByAudio[value];
    //   if (episode) {
    //     setMetadata(episode);
    //     setPlayListStatus(episode);
    //   }
    // };

    // const playAudio = (value) => {
    //   selectAudio(value);
    //   audioPlayer.play();
    // };

    // // Recuperar audio seleccionado
    // idxDBGet("selectedAudio", function (value, error) {
    //   if (value) {
    //     selectAudio(value);
    //   }
    // });

    // // Recuperar el último instante de reproducción
    // audioPlayer.addEventListener("canplaythrough", function () {
    //   // El audio está listo para reproducirse
    //   // Recuperar tiempo de reproducción
    //   idxDBGet("time_" + selectedAudio, function (time, error) {
    //     if (time && audioPlayer.paused) {
    //       audioPlayer.currentTime = time;
    //     }
    //   });
    // });

    // // Guardar el momento de reproducción, cada vez que se actualiza
    // audioPlayer.addEventListener("timeupdate", function () {
    //   if (!audioPlayer.paused) {
    //     // Obtener el tiempo actual del audio
    //     currentTime = audioPlayer.currentTime;
    //     idxDBSet("time_" + selectedAudio, currentTime);
    //   }
    // });
  }, []);

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
      {
        episodes && Object.values(episodes).length > 0 &&
        <article className="tertiary responsive" id="episodes-list">
          {Object.values(episodes).map(episode => <EpisodeListElement key={episode.episode_id} episode={episode} />)}
        </article>
      }
    </main>
  );
}

export default App;
