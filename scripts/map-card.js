function init_map(idloc) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmtpbTkiLCJhIjoiY2xwdTl4bXR0MDNjNDJscXJ5Z2xxNXh1aCJ9.gsUYWzPvyhbFzLf2-IEHGQ';
    const map = new mapboxgl.Map({
        container: idloc.id, 
        style: 'mapbox://styles/mapbox/streets-v12',
        center: idloc.loc,
        zoom: 16.5 
    });

    // const popup = new mapboxgl.Popup()
    //     .setText('edsdklentrkle')
    //     .addTo(map);

    const marker = new mapboxgl.Marker()
        .setLngLat(idloc.loc)
        .addTo(map);
    map.addControl(new mapboxgl.FullscreenControl());
}

function init_maps(){    
   idLocs= [
    {
        id: 'jkcmap',
        loc: [-118.30722410802338, 34.06053851590417],
        name: 'JKC Neurology',
        address: '3700 Wilshire Boulevard Suite 200'
    },
    {
        id: 'drkomap',
        loc: [-118.44479957192101, 34.05880536383019],
        name: 'Westwood Psychiatry',
        address: '10921 Wilshire Boulevard Suite 409A'
    }
   ]
   for (const idLoc of idLocs) {
    init_map(idLoc);
   }
}
window.addEventListener("DOMContentLoaded", init_maps);