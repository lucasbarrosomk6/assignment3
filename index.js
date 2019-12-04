let lati;
let long;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(initMap);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function initMap(position) {
  getLocation();
  var uluru = { lat: position.coords.latitude, lng: position.coords.longitude };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
  lati = position.coords.latitude;
  long = position.coords.longitude;
}

function somewhereElse() {
  var uluru = { lat: -26.344, lng: 121.036 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

function victoria() {
  var uluru = { lat: 48.407326, lng: -123.329773 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

function edmonton() {
  var uluru = { lat: 53.631611, lng: -113.323975 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

function regina() {
  var uluru = { lat: 50.44521, lng: -104.618896 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

function winnipeg() {
  var uluru = { lat: 49.895077, lng: -97.138451 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

function toronto() {
  var uluru = { lat: 43.65107, lng: -79.347015 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: uluru, map: map });
}

function getPlaces() {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const key = "AIzaSyAEiBLouIRytrqaMBHYASh0cIEUum0mFnc";
  const api =
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=";
  fetch(proxy + api + key)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}
