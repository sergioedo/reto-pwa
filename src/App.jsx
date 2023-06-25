/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react'
import { get, set } from 'idb-keyval'

// Función para guardar una clave-valor en el almacenamiento
function idxDBSet(key, value) {
  set(key, value)
    .then(() => {
      console.log("Valor guardado en el almacenamiento");
    })
    .catch((error) => {
      console.error("Error al guardar el valor:", error);
    });
}

// Función para recuperar el valor de una clave del almacenamiento
function idxDBGet(key, callback) {
  get(key)
    .then((value) => {
      callback(value);
    })
    .catch((error) => {
      console.error(
        "Error al leer el valor de audio seleccionado:",
        error
      );
      callback(null, error);
    });
}

const cacheName = "pwa-abuela-cache";

// Check if a file is cached by a service worker
function isFileCached(fileUrl, cacheName) {
  return caches
    .open(cacheName)
    .then(function (cache) {
      return cache.match(fileUrl);
    })
    .then(function (response) {
      if (response) {
        console.log(`File ${fileUrl} is cached!`);
        return true;
      } else {
        console.log(`File ${fileUrl} is NOT cached!`);
        return false;
      }
    });
}

const EpisodeListElement = ({ episode, onEpisodeSelected, onEpisodePlayed, selected = false }) => {
  const [cachedState, setCachedState] = useState('NO_CACHED');

  useEffect(() => {
    // Si aun no esta cacheado el audio, lo descargamos para que esté disponible offline
    isFileCached(episode.download_url, cacheName).then((cached) => {
      console.log({ url: episode.download_url, cached });
      if (cached) setCachedState('CACHED');
    });
  }, [episode]);

  // Agrega el listener de eventos para el doble clic
  const handleDownloadClick = () => {
    // Si aun no esta cacheado el audio, lo descargamos para que esté disponible offline
    if (cachedState !== 'CACHED') {
      isFileCached(episode.download_url, cacheName).then((cached) => {
        if (!cached) {
          setCachedState('DOWNLOADING');
          fetch(episode.download_url).then(() => {
            console.log("Episodio descargado..." + episode.download_url);
            setCachedState('CACHED');
          });
        }
      });
    }
  };

  return (
    <div className='row'>
      <button id={"play_button_" + episode.episode_id} className={`circle small ${selected ? 'secondary black-text' : ''}`} onClick={() => onEpisodePlayed(episode)}>
        <i id={"play_icon_" + episode.episode_id}>{selected ? 'mic' : 'play_circle'}</i>
      </button>
      <a className='col max wave' id={"episode_" + episode.episode_id} onClick={() => onEpisodeSelected(episode)}>
        {episode.title}
      </a>
      <button className={`circle small ${cachedState === 'CACHED' ? 'secondary' : ''}`} onClick={handleDownloadClick}>
        <i className={cachedState === 'CACHED' ? 'tertiary-text' : ''}>{cachedState === 'CACHED' ? 'smartphone' : cachedState === 'DOWNLOADING' ? 'cloud_sync' : 'download_for_offline'}</i>
      </button>
    </div>
  )
};

function App() {
  // Estado
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState();
  const [playbackRate, setPlaybackRate] = useState(1);
  const refAudioPlayer = useRef(null);

  // Inicialización de la app
  useEffect(() => {
    // Realizar la llamada a la API, para cargar los últimos 10 episodios
    fetch("https://api.spreaker.com/v2/shows/2676652/episodes?limit=10")
      .then((response) => response.json())
      .then((data) => {
        const episodes = data.response.items;
        setEpisodes(episodes);
      })
  }, []);

  // cuando ya tenemos todos los episodios cargados
  useEffect(() => {
    // Recuperar audio seleccionado
    idxDBGet("selectedAudio", function (value/*, error*/) {
      if (value) {
        const episode = episodes.find(e => e.episode_id === value)
        if (episode) {
          setSelectedEpisode(episode)
          if (refAudioPlayer) refAudioPlayer.current.src = episode.download_url;
        }
      }
    });
  }, [episodes])

  // Efectos por cambio de episodio
  useEffect(() => {
    if (selectedEpisode) {
      // metadatos para informar de lo que se está reproduciendo
      if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: selectedEpisode.title,
          artist: "Daniel Primo",
          album: "Web Reactiva",
          artwork: [
            {
              src: selectedEpisode.image_url,
              sizes: "160x160",
              type: "image/jpeg",
            },
          ],
        });
      }

      // Guardamos en IndexedDB el identificador del episodio
      idxDBSet("selectedAudio", selectedEpisode.episode_id);

      // Recuperar el último instante de reproducción, cuando audio está listo para reproducirse
      const handleCanPlayTrough = () => {
        // Recuperar tiempo de reproducción
        idxDBGet("time_" + selectedEpisode.episode_id, function (time/*, error*/) {
          if (time && refAudioPlayer.current.paused) {
            refAudioPlayer.current.currentTime = time;
          }
        });
      }
      refAudioPlayer.current.addEventListener("canplaythrough", handleCanPlayTrough);

      // Guardar el momento de reproducción, cada vez que se actualiza
      const handleTimeUpdate = () => {
        if (!refAudioPlayer.current.paused) {
          // Obtener el tiempo actual del audio
          const currentTime = refAudioPlayer.current.currentTime;
          idxDBSet("time_" + selectedEpisode.episode_id, currentTime);
        }
      }
      refAudioPlayer.current.addEventListener("timeupdate", handleTimeUpdate);

      const refAP = refAudioPlayer.current
      return () => {
        refAP.removeEventListener("timeupdate", handleTimeUpdate);
        refAP.removeEventListener("canplaythrough", handleCanPlayTrough);
      }
    }
  }, [selectedEpisode]);

  useEffect(() => {
    refAudioPlayer.current.playbackRate = playbackRate; //si se esta reproduciendo
    refAudioPlayer.current.oncanplay = function () {
      //si no se está reproduciendo
      refAudioPlayer.current.playbackRate = playbackRate;
    };
  }, [playbackRate]);

  const handleSelectEpisode = (episode) => {
    setSelectedEpisode(episode)
    if (refAudioPlayer) refAudioPlayer.current.src = episode.download_url;
  }

  const handlePlayEpisode = (episode) => {
    setSelectedEpisode(episode)
    if (refAudioPlayer) refAudioPlayer.current.src = episode.download_url;
    if (refAudioPlayer) refAudioPlayer.current.play();
  }

  const handleChangePlayBackRate = () => {
    if (playbackRate === 1) {
      setPlaybackRate(2);
    } else {
      setPlaybackRate(1);
    }
  };

  return (
    <main className="container">
      <article className="no-padding primary-container responsive round">
        <img
          id="audio-image"
          className="primary responsive small top-round"
          src={selectedEpisode ? selectedEpisode.image_url : "img/abuela-cascos.svg"}
          style={{ objectFit: 'contain' }}
        />
        <div className="padding bottom-round white">
          <h5 id="audio-title">{selectedEpisode ? selectedEpisode.title.split(':')[0] : 'Play Well Abuela'}</h5>
          <p className="left-align" id="audio-description">
            {selectedEpisode ? selectedEpisode.title.split(':')[1] : 'El reproductor de audio que hasta tu abuela sabrá utilizar! Selecciona un audio y dale al play!'}
          </p>
          <nav className="center-align">
            <audio
              ref={refAudioPlayer}
              id="audio-player"
              controls
              preload="auto"
              style={{ width: '80%' }}
            ></audio>
            <button
              onClick={handleChangePlayBackRate}
              id="playback-rate-btn"
              className="circle large medium-elevate"
            >
              {playbackRate}x
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
        episodes && episodes.length > 0 &&
        <article className="tertiary responsive" id="episodes-list">
          {episodes.map(episode => <EpisodeListElement
            key={episode.episode_id}
            episode={episode}
            onEpisodePlayed={handlePlayEpisode}
            onEpisodeSelected={handleSelectEpisode}
            selected={selectedEpisode && selectedEpisode.episode_id === episode.episode_id}
          />)}
        </article>
      }
    </main>
  );
}

export default App;
