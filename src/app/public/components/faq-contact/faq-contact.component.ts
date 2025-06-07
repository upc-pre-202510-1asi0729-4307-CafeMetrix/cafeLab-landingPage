import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

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
  imports: [NgForOf, ReactiveFormsModule, TranslateModule],
  styleUrls: ['./faq-contact.component.css']
})
export class FaqContactComponent implements OnInit {
  contactForm: FormGroup;
  faqs: FAQ[] = [];

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    this.loadFAQs();
    this.translate.onLangChange.subscribe(() => {
      this.loadFAQs();
    });
  }

  private loadFAQs() {
    this.faqs = [
      {
        question: this.translate.instant('FAQ.FAQ_1.QUESTION'),
        answer: this.translate.instant('FAQ.FAQ_1.ANSWER')
      },
      {
        question: this.translate.instant('FAQ.FAQ_2.QUESTION'),
        answer: this.translate.instant('FAQ.FAQ_2.ANSWER')
      },
      {
        question: this.translate.instant('FAQ.FAQ_3.QUESTION'),
        answer: this.translate.instant('FAQ.FAQ_3.ANSWER')
      }
    ];
  }

  showMoreFAQs(event: Event) {
    event.preventDefault();
    console.log('Show more FAQs');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData: ContactForm = this.contactForm.value;
      console.log('Form submitted:', formData);
      this.contactForm.reset();
    }
  }
}
