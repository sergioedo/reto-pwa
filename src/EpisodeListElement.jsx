/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { isFileCached } from './utils'

const cacheName = "pwa-abuela-cache";

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

  export default EpisodeListElement;