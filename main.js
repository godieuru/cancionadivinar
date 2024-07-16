const songs = [
  {
    title: "Baby One More Time",
    artist: "Britney Spears",
    src: "./media/musica/Britney Spears - Baby One More Time.mp4",
  },
  {
    title: "Genie in a Bottle",
    artist: "Christina Aguilera",
    src: "./media/musica/Christina Aguilera - Genie In A Bottle.mp4",
  },
  {
    title: "Basket Case",
    artist: "Green Day",
    src: "./media/musica/Green Day - Basket Case.mp4",
  },
  {
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    src: "./media/musica/Nirvana - Smells Like Teen Spirit.mp4",
  },
  {
    title: "Wonderwall",
    artist: "Oasis",
    src: "./media/musica/Oasis - Wonderwall.mp4",
  },
  {
    title: "Wannabe",
    artist: "Spice Girls",
    src: "./media/musica/Spice Girls - Wannabe.mp4",
  },
  {
    title: "Under the Bridge",
    artist: "Red Hot Chili Peppers",
    src: "./media/musica/Red Hot Chili Peppers - Under The Bridge.mp4",
  },
];

function adivinarcancion() {
  let intentos = 0;
  let currentTime = 0;
  let audio = null;
  let cancion = null;
  let timeoutId = null;

  function comenzar() {
    intentos = 0;
    currentTime = 0;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    audio = null;
    cancion = songs[Math.floor(Math.random() * songs.length)];
    alert(`Artista: ${cancion.artist}`);
    reproducir();
  }

  function reproducir() {
    if (!audio) {
      audio = new Audio(cancion.src);
    }
    audio.currentTime = currentTime;
    audio.play();

    timeoutId = setTimeout(() => {
      audio.pause();
      currentTime = audio.currentTime;
      preguntatitulo();
    }, 5000);
  }

  function preguntatitulo() {
    const title = prompt("¿Cuál es el nombre de la canción?");
    if (title.toLowerCase() === cancion.title.toLowerCase()) {
      alert("¡Muy bien!");
      if (confirm("¿Te gustaría jugar de nuevo?")) {
        comenzar();
      }
    } else {
      intentos++;
      if (intentos < 3) {
        alert("Prueba de nuevo. Escucha 5 segundos más.");
        reproducir();
      } else {
        alert("Perdiste =(");
        if (confirm("¿Te gustaría jugar de nuevo?")) {
          comenzar();
        }
      }
    }
  }

  comenzar();
}

window.onload = function () {
  const comenzarBtn = document.getElementById("bcomenzar");
  comenzarBtn.onclick = adivinarcancion;
};
