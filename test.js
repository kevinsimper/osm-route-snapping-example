const OSRM = require("osrm");

var osrm = new OSRM("denmark-latest.osrm");
osrm.route(
  {
    coordinates: [
      // [55.70415, 12.586098],
      // [55.671267, 12.57183],
      [12.586098, 55.70415],
      [12.57183, 55.671267],
    ],
    geometries: "geojson",
  },
  function (err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result, null, 2));
    console.log(result.waypoints); // array of Waypoint objects representing all waypoints in order
    console.log(result.routes); // array of Route objects ordered by descending recommendation rank
  }
);

osrm.match(
  {
    coordinates: [
      [12.509527, 55.652603],
      [12.510071, 55.653419],
      [12.508213, 55.653858],
      [12.502389, 55.652782],
      [12.50319, 55.650978],
      [12.509444, 55.65052],
      [12.517361, 55.650276],
      [12.525389, 55.650146],
      [12.531425, 55.651188],
      [12.534257, 55.652149],
      [12.539205, 55.653477],
      [12.544242, 55.655575],
      [12.55177, 55.656895],
      [12.557111, 55.658684],
      [12.559963, 55.662548],
      [12.566097, 55.665348],
      [12.571995, 55.66835],
      [12.567413, 55.672054],
      [12.563204, 55.675823],
      [12.5611, 55.678059],
    ],
    geometries: "geojson",
  },
  function (err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result, null, 2));
    console.log(result.waypoints); // array of Waypoint objects representing all waypoints in order
    console.log(result.routes); // array of Route objects ordered by descending recommendation rank
  }
);
