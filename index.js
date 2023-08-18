let ipAdress;
const btnSearch = document.querySelector(".btn-search");
const inputSearch = document.querySelector(".input-search");
const ip = document.querySelector(".ip-addr");
const region = document.querySelector(".country_code");
const timezone = document.querySelector(".utc");
const isp = document.querySelector(".country_calling_code");
const ipAddressInfromation = document.querySelector(".ip-address-information");
const blank = document.querySelector(".blank");

 function getLocation() {
    ipAdress = inputSearch.value;

 fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_un4vr6AHUaq94EzSdx6SQ6HysUWHs&ipAddress=${ipAdress}&domain=${ipAdress}`)
        .then(response => response.json())
        .then(data => {
            ip.innerHTML = data.ip
            region.innerHTML = data.location.region
            timezone.innerHTML = data.location.timezone
            isp.innerHTML = data.isp;
            initMap(data.location.lat, data.location.lng)
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
}
getLocation()

btnSearch.addEventListener("click", getLocation)

function initMap(lat, lng) {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat, lng },
        mapTypeControl: false,
    });
    geocoder = new google.maps.Geocoder();
}
