define(['leaflet', 'jquery'], function () {

	var locales = 
		{"American Samoa":  {"lat" : -14.2893037, "long" : -170.6925106 }, "Australia":  {"lat" : -27.2692649, "long" : 136.1048783 }, "Brunei Darussalam":  {"lat" : 4.4137155, "long" : 114.5653908 }, "Cambodia":  {"lat" : 13.5066394, "long" : 104.869423 }, "China":  {"lat" : 35.000074, "long" : 104.999927 }, "Fiji":  {"lat" : -18.1239696, "long" : 179.0122737 }, "French Polynesia":  {"lat" : -16.9136995, "long" : -148.9504015 }, "Guam":  {"lat" : 13.5394645, "long" : 144.8970036 }, "Hong Kong":  {"lat" : null, "long" : null }, "Indonesia":  {"lat" : -4.7993356, "long" : 114.5632032 }, "Japan":  {"lat" : null, "long" : null }, "Kiribati":  {"lat" : 0.306, "long" : 173.664834025 }, "North Korea":  {"lat" : 40.3123959, "long" : 127.399971 }, "South Korea":  {"lat" : 35.3985008, "long" : 127.937111 }, "Laos":  {"lat" : 20.0171109, "long" : 103.378253 }, "Macau":  {"lat" : null, "long" : null }, "Malaysia":  {"lat" : 2.3923759, "long" : 112.8471939 }, "Marshall Islands":  {"lat" : 6.9518742, "long" : 170.9985095 }, "Micronesia":  {"lat" : 5.5600565, "long" : 150.1982846 }, "Mongolia":  {"lat" : 46.8250388, "long" : 103.8499736 }, "Myanmar":  {"lat" : 17.1750495, "long" : 95.9999652 }, "New Caledonia":  {"lat" : -21.3019905, "long" : 165.4880773 }, "New Zealand":  {"lat" : -41.3116998, "long" : 174.9746507 }, "Northern Mariana Islands":  {"lat" : 15.0622587, "long" : 145.680595273526 }, "Palau":  {"lat" : 6.0973669, "long" : 133.3136306 }, "Papua New Guinea":  {"lat" : -5.6816069, "long" : 144.2489081 }, "Philippines":  {"lat" : 12.7503486, "long" : 122.7312101 }, "Samoa":  {"lat" : -13.7332708, "long" : -171.9333697 }, "Singapore":  {"lat" : 1.357107, "long" : 103.8194992 }, "Solomon Islands":  {"lat" : -8.2622822, "long" : 159.0048709 }, "Thailand":  {"lat" : 14.8971921, "long" : 100.83273 }, "Timor-Leste":  {"lat" : -8.5151979, "long" : 125.8375756 }, "Tonga":  {"lat" : -19.1988696, "long" : -174.6044381 }, "Tuvalu":  {"lat" : -8.1712764, "long" : 177.784182165665 }, "Vanuatu":  {"lat" : -17.6257077, "long" : 168.4077147 }, "Vietnam":  {"lat" : 13.2904027, "long" : 108.4265113 }, "Afghanistan":  {"lat" : 33.0000866, "long" : 64.9998468 }, "Bangladesh":  {"lat" : 24.4768783, "long" : 90.2932426 }, "Bhutan":  {"lat" : 27.549511, "long" : 90.5119273 }, "India":  {"lat" : 22.3511148, "long" : 78.6677428 }, "Maldives":  {"lat" : 4.2218417, "long" : 73.4867968 }, "Nepal":  {"lat" : 28.1083178, "long" : 84.0916787 }, "Pakistan":  {"lat" : 30.3308401, "long" : 71.247499 }, "Sri Lanka":  {"lat" : 7.9090561, "long" : 80.8338443 } };
    
	var map = L.map('map', {
		center: [18,107],
		zoom: 4,
		scrollWheelZoom: false,
		worldCopyJump: true,
		inertiaMaxSpeed: 1000
	});

	L.tileLayer('http://d.tiles.mapbox.com/v3/nikhils.map-rrpbmuxw/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

	var panMap = function(place) {
		var lookup = locales[place];
		map.panTo([lookup.lat, lookup.long]);
		map.setZoom(5)
	};

	return {
		panMap: panMap
	}
});