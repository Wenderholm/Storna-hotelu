var mapa;
var hotelCoordinates = [54.563935, 18.39354];

function mapaFallback() {
  var mapContainer = document.getElementById("mapka");
  if (!mapContainer || mapa) {
    return;
  }

  mapContainer.innerHTML =
    '<iframe title="Mapa hotelu" width="100%" height="100%" frameborder="0" style="border:0" referrerpolicy="no-referrer-when-downgrade" src="https://www.openstreetmap.org/export/embed.html?bbox=18.34%2C54.52%2C18.45%2C54.60&layer=mapnik&marker=54.563935%2C18.393540" allowfullscreen></iframe>';
}

function dodajMarker(opcjeMarkera) {
  if (!mapa || !window.L) {
    return;
  }

  return L.marker(opcjeMarkera.coordinates || hotelCoordinates)
    .addTo(mapa)
    .bindPopup(opcjeMarkera.popupText || "Tu nas znajdziesz");
}

function mapaStart() {
  if (!window.L) {
    mapaFallback();
    return;
  }

  var mapContainer = document.getElementById("mapka");
  if (!mapContainer) {
    return;
  }

  mapa = L.map("mapka", {
    center: hotelCoordinates,
    zoom: 12,
    scrollWheelZoom: false,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(mapa);

  var marker = dodajMarker({
    coordinates: hotelCoordinates,
    popupText: "Hotel Phoenix<br>Paseo de Gomiz, 3, Alicante",
  });

  if (marker) {
    marker.openPopup();
  }
}

window.mapaStart = mapaStart;
window.mapaFallback = mapaFallback;

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    if (!mapa) {
      mapaStart();
    }
  }, 300);

  setTimeout(function () {
    if (!mapa) {
      mapaFallback();
    }
  }, 2000);
});
