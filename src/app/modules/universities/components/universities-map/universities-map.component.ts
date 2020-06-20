import {Component, OnInit} from '@angular/core';
// import 'leaflet';

// import {icon, Marker} from 'leaflet';
import {UniversitiesService} from '../../../../services/universities.service';
import * as L from 'leaflet';
import 'leaflet.markercluster';


@Component({
  selector: 'app-universities-map',
  templateUrl: './universities-map.component.html',
  styleUrls: ['./universities-map.component.css']
})
export class UniversitiesMapComponent implements OnInit {

  constructor(private universityService: UniversitiesService) {
  }


  // Open Street Map Definition
  LAYER_OSM = {
    id: 'openstreetmap',
    name: 'Open Street Map',
    enabled: false,
    layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Open Street Map'
    }),
  };


  // Values to bind to Leaflet Directive
  layersControlOptions = {position: 'bottomright'};
  baseLayers = {
    'Open Street Map': this.LAYER_OSM.layer
  };
  options = {
    zoom: 3,
    center: L.latLng([46.879966, -121.726909]),
    zoomControl: false
  };

  // Marker cluster stuff
  markerClusterGroup: L.MarkerClusterGroup;
  markerClusterData: L.Marker[] = [];
  markerClusterOptions: L.MarkerClusterGroupOptions;


  ngOnInit() {
    this.refreshData();
  }

  markerClusterReady(group: L.MarkerClusterGroup) {
    this.markerClusterGroup = group;
  }
  mapReady(map: L.Map) {
    map.addControl(L.control.zoom({ position: 'bottomright' }));
  }

  refreshData(): void {

    this.markerClusterData = this.generateData();
  }

  generateData(): L.Marker[] {

    const data: L.Marker[] = [];
    const icon = L.icon({
      iconSize: [25, 41],
      iconAnchor: [25, 41],
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
    });


    const values = this.universityService.getUniversityCoordinates();
    for (const coordinates of values) {
      data.push(L.marker([coordinates[0], coordinates[1]], {icon}));
    }


    return data;

  }

}
