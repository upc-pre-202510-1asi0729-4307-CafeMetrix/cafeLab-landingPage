import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface Testimonial {
  name: string;
  title: string;
  image: string;
  quote: string;
}

interface Review {
  name: string;
  image: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Martin Gutierrez',
      title: 'Dueño de cafetería',
      image: 'assets/img/Martin_guiterrez.jpg',
      quote: 'Gracias a CafeLab pude optimizar mis procesos mediante documentaciones intuitivas, lo que mejoró mis planificaciones.'
    },
    {
      name: 'Ana Rivera',
      title: 'Barista en Lima',
      image: 'assets/img/Ana_Rivera.jpg',
      quote: 'CafeLab me ayudó a estandarizar mis tuestes y reducir errores. Ahora todos en la cafetería usan la misma receta.'
    }
  ];

  reviews: Review[] = [
    {
      name: 'Rosa Dominguez',
      image: 'assets/img/Rosa.jpeg',
      rating: 5,
      comment: 'Útil, fácil de usar'
    },
    {
      name: 'Miguel Diaz',
      image: 'assets/img/Miguel.jpeg',
      rating: 5,
      comment: 'Rentable'
    }
  ];

  getStars(rating: number): string {
    return '⭐'.repeat(rating);
  }
}
