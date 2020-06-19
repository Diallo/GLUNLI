import {Component, OnInit} from '@angular/core';
import 'leaflet';

import {icon, Marker} from 'leaflet';
import {UniversitiesService} from '../../../../services/universities.service';

declare let L;

@Component({
  selector: 'app-universities-map',
  templateUrl: './universities-map.component.html',
  styleUrls: ['./universities-map.component.css']
})
export class UniversitiesMapComponent implements OnInit {

  constructor(private universityService: UniversitiesService) {
  }

  icon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [25, 41],
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  };

  ngOnInit() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const markerList = this.universityService.getUniversityCoordinates();
    for (const coordinates of markerList) {
      const marker = L.marker(coordinates, this.icon).addTo(map);
      marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();

    }
  }

}
