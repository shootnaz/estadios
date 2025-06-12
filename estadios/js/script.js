let map;
let markers = {};

// Función que se ejecutará desde initMap (definida en el HTML)
function setMapInstance(mapa, marcadores) {
  map = mapa;
  markers = marcadores;
}

const estadios = {
  river: {
    nombre: "Estadio Monumental",
    imagen: "img/river.jpg",
    fundacion: 1901,
    capacidad: "83.000 espectadores",
    direccion: "Av. Pres. Figueroa Alcorta 7597, CABA",
    historia: "River Plate fue fundado en 1901 y es uno de los clubes más importantes de Argentina. Su estadio, el Monumental, es el más grande del país. Ha ganado múltiples campeonatos locales e internacionales. Su rivalidad con Boca Juniors es una de las más intensas del mundo."
  },
  // ... el resto igual
  velez: {
    nombre: "Estadio José Amalfitani",
    imagen: "img/velez.jpg",
    fundacion: 1910,
    capacidad: "49.540 espectadores",
    direccion: "Av. Juan B. Justo 9200, Liniers, CABA",
    historia: "Vélez Sarsfield es uno de los clubes más respetados de Argentina por su excelente organización y logros. Fue campeón de la Copa Libertadores y la Intercontinental en 1994. Su estadio es moderno y uno de los más usados para eventos internacionales."
  },
  rosario: {
    nombre: "Estadio Gigante de Arroyito",
    imagen: "img/rosario.jpg",
    fundacion: 1889,
    capacidad: "41.654 espectadores",
    direccion: "Av. Génova y Cordiviola, Rosario, Santa Fe",
    historia: "Rosario Central es uno de los clubes más tradicionales del país. Su hinchada es una de las más fervorosas y el club tiene una fuerte rivalidad con Newell’s. El Gigante de Arroyito fue sede del Mundial 1978 y es símbolo del fútbol rosarino."
  },
  platense: {
    nombre: "Estadio Ciudad de Vicente López",
    imagen: "img/platense.jpg",
    fundacion: 1905,
    capacidad: "28.000 espectadores",
    direccion: "Zufriategui 2021, Vicente López, Bs.As.",
    historia: "Club Atlético Platense tiene una historia muy ligada al fútbol porteño y del conurbano norte. Su apodo es 'El Calamar'. Luego de varios años en el ascenso, logró su regreso a Primera y mantiene una base de hinchas fieles en la zona."
  }
};

document.getElementById("buscador").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const consulta = this.value.toLowerCase().trim();
    const resultadoDiv = document.getElementById("resultado");
    const estadio = estadios[consulta];

    if (estadio) {
      resultadoDiv.innerHTML = `
        <h2>${consulta.toUpperCase()}</h2>
        <p><strong>Estadio:</strong> ${estadio.nombre}</p>
        <p><strong>Fundación:</strong> ${estadio.fundacion}</p>
        <p><strong>Capacidad:</strong> ${estadio.capacidad}</p>
        <p><strong>Dirección:</strong> ${estadio.direccion}</p>
        <p>${estadio.historia}</p>
        <img src="${estadio.imagen}" alt="${estadio.nombre}" />
        <div class="redes">
          <a href="https://wa.me/" target="_blank">WhatsApp</a>
          <a href="https://instagram.com/" target="_blank">Instagram</a>
        </div>
      `;

      // Si existe el marcador, centrar el mapa y hacer zoom
      if (markers[consulta]) {
        map.panTo(markers[consulta].getPosition());
        map.setZoom(15);
        // Opcional: podés abrir un InfoWindow aquí si querés
      }
    } else {
            resultadoDiv.innerHTML = "<p>No se encontró el club.</p>";
          }
        }
      });