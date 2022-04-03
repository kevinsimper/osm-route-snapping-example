# Snapping routes with OSM and OSRM

Examples of using the node.js osrm module to snap a route with data from OSM.

![](https://i.imgur.com/q9UGgk5.png)

Download all node, waypoints and relations for a region.

```
$ wget http://download.geofabrik.de/europe/denmark-latest.osm.pbf
```

Generate the routing information.

```
$ node_modules/osrm/lib/binding/osrm-extract denmark-latest.osm.pbf -p node_modules/osrm/profiles/car.lua
```

Then try running the snapping and routing.

```
$ node test.js
```

The geojson can be visualized on https://geojson.io
