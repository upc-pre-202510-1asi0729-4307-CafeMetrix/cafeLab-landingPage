import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf} from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
}

interface ContactForm {
  nombre: string;
  apellidos: string;
  email: string;
  mensaje: string;
}

@Component({
  selector: 'app-faq-contact',
  templateUrl: './faq-contact.component.html',
  imports: [
    NgForOf,
    ReactiveFormsModule
  ],
  styleUrls: ['./faq-contact.component.css']
})
export class FaqContactComponent {
  contactForm: FormGroup;

  faqs: FAQ[] = [
    {
      question: '¿Puedo usar Cafelab si solo soy barista y no tengo cafetería?',
      answer: '¡Claro! Cafelab se adapta tanto a baristas individuales como a cafeterías completas.'
    },
    {
      question: '¿Qué diferencia hay entre los planes?',
      answer: 'Los planes difieren en cantidad de usuarios, acceso a funciones avanzadas y módulos de análisis.'
    },
    {
      question: '¿La app está disponible para móvil?',
      answer: 'Sí, Cafelab funciona perfectamente desde navegador móvil. La app nativa está en desarrollo.'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  showMoreFAQs(event: Event) {
    event.preventDefault();
    console.log('Show more FAQs');
    // Implement logic to show more FAQs
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData: ContactForm = this.contactForm.value;
      console.log('Form submitted:', formData);
      // Handle form submission
      this.contactForm.reset();
    }
  }
}
