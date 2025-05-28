import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface Benefit {
  title: string;
  description: string;
  cta: {
    highlight: string;
    rest: string;
  };
  buttonText: string;
  link: string;
}

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent {
  benefits: Benefit[] = [
    {
      title: 'Soy barista',
      description: 'Documenta tus recetas, eleva tu técnica y construye un perfil sensorial único que defina tu estilo como profesional.',
      cta: {
        highlight: 'Perfecciona',
        rest: 'tu arte.'
      },
      buttonText: 'Ver herramientas para baristas',
      link: '#herramientas'
    },
    {
      title: 'Tengo una cafetería',
      description: 'Optimiza tu inventario, garantiza la trazabilidad de tus productos y profesionaliza cada aspecto de tu operación cafetera.',
      cta: {
        highlight: 'Impulsa',
        rest: 'tu negocio.'
      },
      buttonText: 'Ver soluciones para negocios',
      link: '#soluciones'
    }
  ];
}
