 //map object
    const myMap = {
        coordinates: [],
        businesses: [],
        map: {},
        markers: {},
    }

//coordinates
var map = L.map('map').setView([33.8584324356198, -117.32376368845999], 13);
//leaflet map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

  const marker = L.marker([33.8584324356198, -117.32376368845999]).addTo(map)
    .bindPopup('You are here.')
    .openPopup();

const polygon =L.polygon([
    [33.887812,-117.279917],
    [33.882569,-117.368245],
    [33.834904,-117.351034],
    [33.844527,-117.283921],
    [33.887812,-117.279917],
    
    ]);
     polygon.addTo(map);

     const fb = L.marker([33.882569,-117.368245]).bindPopup('farmerboys')
     const lmm = L.marker([33.834904,-117.351034]).bindPopup('lake mathews market')
     const sc = L.marker([33.936081, -117.288378]).bindPopup('sams club')
    
     const cm = L.marker([33.887812, -117.279917]).bindPopup('cemetery')
     const tms = L.marker([33.844527, -117.283921]).bindPopup('tomas rivera middle school')
const stations = L.layerGroup([sc,fb,lmm,tms,cm]).add(map)


    async function getCoords(){
	const pos = await new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject)
	});
	return [pos.coords.latitude, pos.coords.longitude]}

    // loads window
    window.onload = async () => {
        const coords = await getCoords()
        console.log(coords)
        myMap.coordinates = coords
        myMap.buildMap()
    }

// gets coordinates from api

function getCoords (){
fetch(`https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?&query=coffee&limit=5&ll=41.8781%2C-87.6298`,)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err))
}

    
