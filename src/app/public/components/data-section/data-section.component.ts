import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface DataFeature {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

@Component({
  selector: 'app-data-section',
  templateUrl: './data-section.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./data-section.component.css']
})
export class DataSectionComponent {
  features: DataFeature[] = [
    {
      title: 'Dashboard de inventario',
      description: 'Seguimiento de lotes en tiempo real, stock de granos, y control de movimientos.',
      image: '/dashboard_inventario.png',
      reverse: false
    },
    {
      title: 'Curvas de tueste',
      description: 'Control preciso del desarrollo del tueste para maximizar las cualidades sensoriales de cada origen.',
      image: '/curva_tueste.png',
      reverse: true
    }
  ];
}
