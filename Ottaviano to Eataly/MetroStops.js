const metroStops = [
  [12.45774, 41.90932],
  [12.46615, 41.91173],
  [12.47645, 41.91282],
  [12.48307, 41.90674],
  [12.48871, 41.90424],
  [12.49582, 41.90259],
  [12.49994, 41.90155],
  [12.49371, 41.89507],
  [12.49154, 41.89169],
  [12.48786, 41.88354],
  [12.48225, 41.87592],
];



	mapboxgl.accessToken = 'pk.eyJ1IjoiZmlyZWZseTEyMTkiLCJhIjoiY2xnd2Y2OWE2MnZ2ejNycDNweDE5cXBhaiJ9.xYSJJtvkkZ0tQOAdbLJ1gQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID  
      style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
        center: [12.45774, 41.90932], // starting position [lng, lat]
        zoom: 13 // starting zoom
    });

    const layerList = document.getElementById('menu');
    const inputs = layerList.getElementsByTagName('input');

    for (const input of inputs) {
        input.onclick = (layer) => {
            const layerId = layer.target.id;
            map.setStyle('mapbox://styles/mapbox/' + layerId);
        };
    }


let marker = new mapboxgl.Marker().setLngLat([12.45774, 41.90932]).addTo(map);

let counter = 0;
function move() {

  setTimeout(() => {
    if (counter >= metroStops.length) return;
    marker.setLngLat(metroStops[counter]);
    counter++;
    move();
  }, 1000);
}

if (typeof module !== 'undefined') {
  module.exports = { move, counter, marker, metroStops };
}
