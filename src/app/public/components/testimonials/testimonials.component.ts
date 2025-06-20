import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import {LanguageService} from '../../../core/services/language.service';

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
  imports: [NgForOf, TranslateModule],
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  reviews: Review[] = [];

  constructor(private translate: TranslateService, private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.waitForTranslations().subscribe(loaded => {
      if (loaded) {
        this.loadTestimonials();
      }
    });

    this.translate.onLangChange.subscribe(() => {
      this.loadTestimonials();
    });
  }

  private loadTestimonials() {
    this.testimonials = [
      {
        name: this.translate.instant('TESTIMONIALS.TESTIMONIAL_1.NAME'),
        title: this.translate.instant('TESTIMONIALS.TESTIMONIAL_1.TITLE'),
        image: '/Martin_guiterrez.jpg',
        quote: this.translate.instant('TESTIMONIALS.TESTIMONIAL_1.QUOTE')
      },
      {
        name: this.translate.instant('TESTIMONIALS.TESTIMONIAL_2.NAME'),
        title: this.translate.instant('TESTIMONIALS.TESTIMONIAL_2.TITLE'),
        image: '/Ana_Rivera.jpg',
        quote: this.translate.instant('TESTIMONIALS.TESTIMONIAL_2.QUOTE')
      }
    ];

    this.reviews = [
      {
        name: this.translate.instant('TESTIMONIALS.REVIEW_1.NAME'),
        image: '/Rosa.jpeg',
        rating: 5,
        comment: this.translate.instant('TESTIMONIALS.REVIEW_1.COMMENT')
      },
      {
        name: this.translate.instant('TESTIMONIALS.REVIEW_2.NAME'),
        image: '/Miguel.jpeg',
        rating: 5,
        comment: this.translate.instant('TESTIMONIALS.REVIEW_2.COMMENT')
      }
    ];
  }

  getStars(rating: number): string {
    return '⭐'.repeat(rating);
  }
}
