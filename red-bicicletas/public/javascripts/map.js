const map = L.map("map").setView([-34.61315, -58.37723], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution: "© OpenStreetMap",
}).addTo(map);

//Example ubications
L.marker([-34.61315, -58.37723]).addTo(map);
