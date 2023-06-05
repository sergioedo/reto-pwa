¡Claro! Estoy aquí para ayudarte con tus dudas sobre desarrollo web. Adelante, pregúntame lo que necesites.
----
como resolverias el siguiente reto: # Reto PWA

> Crea por fin una Progressive Web Application para acercar la experiencia móvil a la web

Bienvenid@ a un nuevo reto de programación de la comunidad malandriner de [webreactiva.com](https://webreactiva.com)

## 1. Motivación

Seguro que llevas tiempo pensando en crear una PWA, probar las funcionalidades que trae, deslumbrar al mundo con tu invento.

Lo que pasa es que nunca hay tiempo para dedicárselo a la creación de cosas nuevas. 

El tiempo te lo voy a “regalar” aquí con una motivación extra:

**Las nuevas siglas de la PWA**

Crea tu propia PWA para deslumbrar a la familia y los colegas: 

`Petándolo Wapamente Abuela`

![image](https://github.com/webreactiva-devs/reto-pwa/assets/1122071/80e7a0e6-601a-46a3-b0a6-372a13de8cef)

·

## 2. Propuesta

1. Cada participante resuelve el reto con las herramientas que prefiera siempre que no sea una herramienta final (Ej: un plugin de WordPress que te lo haga)  
	_Hay que picar algo de código, malandriners_
2. Cada semana se propondrá una nueva funcionalidad para la PWA.
3. El reto finaliza con un directo donde podremos ver las soluciones de los participantes el 15 de Junio (Jueves) a las 19:00 CEST.


### 🤔 Pero, entonces, ¿esto no es curso?

No.

Puedes seguir cualquier curso de Udemy y de YouTube para hacerlo.

Esta propuesta es diferente. Se trata de poner las **manos sobre el teclado** y seguir los pasos de la formación. 

O, mejor aún, adaptarlo a unos requisitos concretos.


### 🏆 Recompensa

Repartiremos puntos entre los participantes que darán acceso a más oportunidades para ganar una recompensa.

**¿Qué recompensa?**

Pronto lo sabrás ;) 


·


## 3. Objetivo final

1. Crear una PWA con características relacionadas con la reproducción de audio.
2. Las características completas no se desvelarán hasta el final del reto.
3. La idea es que sea una webapp con desarrollo incremental: cada semana incorporamos una nueva funcionalidad
4. El reto finaliza con un directo donde podremos ver las soluciones de los participantes el 15 de Junio (Jueves) a las 19:00 CEST


·


## 4. Cómo se participa

- Tu código tiene que estar subido en un repositorio de Github o Gitlab de forma pública
- [Envía tus soluciones con las issues de este proyecto](https://github.com/webreactiva-devs/reto-pwa/issues) indicando cuál es tu solución, contando tus dificultades y enlazando la solución final


·

# Contiendas


## ⚔️ Primera contienda: Manifiesto!

Quieres crear una PWA para escuchar audio y que tu abuela, que está enganchadísima a redes, tenga en el móvil algo parecido a una radio.

Este es el mockup de la webapp:

![image](https://github.com/webreactiva-devs/reto-pwa/assets/1122071/be303bed-12ef-496b-8864-6788065d5692)



1. Un botón para reproducir audio (y detenerlo)
2. Un selector del audio que puede escuchar.

El planteamiento de requisitos mínimos para la primera semana es:


### Requisitos funcionales
1. La web tiene que reproducir un fichero de audio. Por ejemplo [este](https://api.spreaker.com/v2/episodes/48338128/download.mp3)
2. Basta con que reproduzca el audio con la etiqueta estándar de HTML
3. No es necesario que tenga estilos ni que sea bonita en este punto

### Requisitos PWA
1. Tienes que dar un nombre a tu PWA
2. Debes permitir que la webapp sea instalable en un dispositivo móvil 
3. El requisito anterior hará que tengas que cumplir otros (manifest.json, miniaturas…)
4. Se valorará positivamente tener un manifest.json lo más completo posible y una “splash screen”



### 🥶 Recomendaciones de Supercoco

¡NO TE LÍES!

No hace falta (de momento) que haya caché offline, ni notificaciones, ni reproducción en segundo plano, ni selector de audios…

Ya ampliaremos las funcionalidades de la webapp en las siguientes semanas.

👉 Usa la tecnología que ya sepas manejar o la que quieras aprender.

Te dejo unos recursos para que puedas empezar  a investigar:

- [Cómo construir una PWA desde cero con HTML, CSS y JavaScript](https://www.freecodecamp.org/espanol/news/como-construir-una-pwa-desde-cero-con-html-css-y-javascript/)
- [Learn PWA](https://web.dev/learn/pwa/)
- [Get started with Progressive Web Apps](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/)
- [Cómo agregar un manifiesto en la aplicación web](https://web.dev/i18n/es/add-manifest)
- [Vite PWA](https://vite-pwa-org.netlify.app/)
- [WR 27: Convierte tu web en una PWA](https://www.webreactiva.com/podcast/web-en-pwa)


### Puntos

Los participantes que entreguen la solución antes del 1 de Junio a las 19:00 CEST ganan 20 puntos.

Si entregas más tarde, antes del final, 10 puntos.



## Segunda contienda: Service Worker!

Tampoco es que tu abuela viva en una cueva o en mitad de la nada, pero no es el lugar con mejor cobertura del mundo.

Te dice que muchas veces estaba escuchando algo y luego “como que se va la conexión”.

Tu PWA necesita una mejora cuanto antes: ¡qué funcione en modo offline!

### Requisitos

1. Debes incorporar un Service Worker en tu PWA
2. El Service Worker debe registrarse correctamente
3. Hay que incluir un sistema de caché que sea capaz de almacenar los ficheros estáticos de la web: HTML, CSS, JS y, por supuesto, los audios
4. La web debe poder cargarse en modo offline una vez haya sido cargada previamente.

**Extra**

- ¿Podría tu PWA guardar el estado de reproducción del audio? Por ejemplo, el audio seleccionado o el segundo en el que se estaba reproduciendo.

### 🥶 Recomendaciones de Supercoco

Algunos recursos que pueden serte de ayuda:

- [WRP 247. Cómo empezar y deslumbrar con las PWA](https://www.webreactiva.com/audios/como-empezar-deslumbrar-pwa)
- Learn PWA: [Service Workers](https://web.dev/learn/pwa/service-workers/), [Caching](https://web.dev/learn/pwa/caching/)
- [Hacer que las PWAs trabajen desconectadas con servicio workers](https://developer.mozilla.org/es/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers) {[EN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Offline_Service_workers)}
- [Make Progressive Web Apps Work Offline](https://dev.to/azure/05-make-progressive-web-apps-work-offline-fil)



### Puntos

Los participantes que entreguen la solución antes del 8 de Junio a las 23:59  ganan 20 puntos.

Si entregas más tarde, antes del final, 10 puntos.



## Tercera contienda: Pantalla Bloqueada!

WIP

¡A por ello!

----

Para resolver el reto propuesto de crear una Progressive Web Application (PWA) con características relacionadas con la reproducción de audio, puedes seguir los siguientes pasos:

1. **Requisitos funcionales:**
   - Comienza por crear una estructura básica de HTML para tu PWA. Incluye los elementos necesarios, como botones y selectores de audio, de acuerdo con el mockup proporcionado.
   - Implementa la reproducción de audio utilizando la etiqueta `<audio>` estándar de HTML. Puedes usar el enlace de ejemplo proporcionado (`https://api.spreaker.com/v2/episodes/48338128/download.mp3`) como origen para reproducir el audio.
   - Asegúrate de que el audio se pueda reproducir y detener correctamente mediante el botón correspondiente.

2. **Requisitos PWA:**
   - Asigna un nombre a tu PWA. Puedes elegir un nombre relacionado con el tema de la aplicación, como "RadioApp" o algo similar.
   - Haz que tu PWA sea instalable en dispositivos móviles. Esto implica agregar un archivo `manifest.json` y configurar adecuadamente los metadatos necesarios, como el nombre de la aplicación, los íconos, la descripción, etc.
   - Crea una "splash screen" para tu PWA. Esto es una pantalla de carga que se muestra cuando la aplicación se inicia. Puedes diseñar una imagen o utilizar una biblioteca que te permita generar una "splash screen" de manera automática.

3. **Recomendaciones y recursos:**
   - Puedes comenzar aprendiendo los conceptos básicos de las PWA y cómo crear una desde cero utilizando HTML, CSS y JavaScript. Puedes seguir tutoriales en línea o cursos disponibles en plataformas como Udemy o YouTube.
   - Explora la documentación y los recursos proporcionados en el reto para obtener más información sobre las PWA, manifest.json, Service Workers, caché y otras funcionalidades que se agregarán en las siguientes semanas.

Recuerda que este reto es incremental, lo que significa que cada semana se incorporará una nueva funcionalidad. En la primera contienda, se espera cumplir con los requisitos mencionados anteriormente. Asegúrate de subir tu código a un repositorio público en GitHub o GitLab y enviar tu solución a través de las issues del proyecto proporcionado.

¡Buena suerte con el reto y disfruta creando tu propia PWA! Si tienes alguna pregunta adicional, estaré encantado de ayudarte.

----

¿puedes darme un fichero HTML con CSS y Javascript que resuelva el reto anterior?

----

Por supuesto, aquí tienes un ejemplo de cómo podría ser un archivo HTML con CSS y JavaScript para resolver la primera contienda del reto PWA:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RadioApp</title>
  <link rel="manifest" href="manifest.json">
  <style>
    /* Estilos básicos */
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
    }
    
    audio {
      margin-bottom: 20px;
    }
    
    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>RadioApp</h1>
  
  <audio id="audio-player" src="https://api.spreaker.com/v2/episodes/48338128/download.mp3" controls></audio>
  
  <button id="play-button">Reproducir</button>
  
  <script>
    // Manejo de la reproducción de audio
    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.getElementById('play-button');
    
    playButton.addEventListener('click', () => {
      if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Detener';
      } else {
        audioPlayer.pause();
        playButton.textContent = 'Reproducir';
      }
    });
    
    // Registro del Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
          .then(registration => {
            console.log('Service Worker registrado con éxito:', registration);
          })
          .catch(error => {
            console.error('Error al registrar el Service Worker:', error);
          });
      });
    }
  </script>
</body>
</html>
```

Este archivo HTML incluye un reproductor de audio básico con un botón para reproducir y detener la reproducción. El audio se carga desde la URL proporcionada en el enunciado del reto. Además, se agrega un registro básico del Service Worker al final del archivo.

Recuerda que este es solo un ejemplo básico y necesitarás agregar más funcionalidades y estilos a medida que avanzas en las siguientes contiendas del reto. No olvides crear los archivos `manifest.json` y `service-worker.js` mencionados en el enunciado para completar los requisitos de una PWA.

----

¿y ahora podrias darme un ejemplo de fichero manifest.json?

----

¡Claro! Aquí tienes un ejemplo de cómo podría ser un archivo `manifest.json` para tu PWA:

```json
{
  "name": "RadioApp",
  "short_name": "RadioApp",
  "description": "Una aplicación para escuchar radio en línea",
  "icons": [
    {
      "src": "icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#007bff"
}
```

Este es solo un ejemplo básico del archivo `manifest.json`. Aquí se especifican varias propiedades importantes:

- `"name"`: El nombre de tu PWA.
- `"short_name"`: Un nombre corto o abreviado de tu PWA.
- `"description"`: Una descripción breve de tu PWA.
- `"icons"`: Una lista de íconos en diferentes tamaños que se utilizarán para representar tu PWA en diferentes dispositivos y contextos.
- `"start_url"`: La URL inicial a la que se debe acceder cuando se lanza tu PWA.
- `"display"`: Define cómo se mostrará tu PWA. En este caso, se establece como `"standalone"` para que parezca una aplicación independiente.
- `"background_color"`: El color de fondo de tu PWA.
- `"theme_color"`: El color de acento principal de tu PWA.

Asegúrate de tener los íconos correspondientes en los tamaños especificados y de ajustar el archivo `manifest.json` según tus necesidades y preferencias.

Recuerda incluir este archivo en la raíz de tu proyecto y asegurarte de que esté correctamente referenciado en tu archivo HTML principal.