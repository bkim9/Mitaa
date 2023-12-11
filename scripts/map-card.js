function init_map(idloc) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmtpbTkiLCJhIjoiY2xwdTl4bXR0MDNjNDJscXJ5Z2xxNXh1aCJ9.gsUYWzPvyhbFzLf2-IEHGQ';
    const map = new mapboxgl.Map({
        container: idloc.id, 
        style: 'mapbox://styles/mapbox/streets-v12',
        center: idloc.loc,
        zoom: 16.5 
    });
    const marker = new mapboxgl.Marker()
        .setLngLat(idloc.loc)
        .addTo(map);

    map.addControl(new mapboxgl.FullscreenControl());
}

function init_maps(){    
   idLocs= [
    {
        id: 'jkcmap',
        loc: [-118.30722410802338, 34.06053851590417]
    },
    {
        id: 'drkomap',
        loc: [-118.44470618475876, 34.058902701314295]
    }
   ]
   for (const idLoc of idLocs) {
    init_map(idLoc);
   }
}

window.addEventListener("DOMContentLoaded", init_maps);