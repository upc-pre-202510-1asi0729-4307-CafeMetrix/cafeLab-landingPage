import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterLink {
  text: string;
  url: string;
  isEmail?: boolean;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerSections: FooterSection[] = [
    {
      title: 'Enlaces rápidos',
      links: [
        { text: 'Inicio', url: '#' },
        { text: 'Beneficios', url: '#beneficios' },
        { text: 'Planes', url: '#planes' },
        { text: 'Contactos', url: '#faq-contacto' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Blog', url: '#' },
        { text: 'FAQ', url: '#faq-contacto' },
        { text: 'Soporte', url: '#' }
      ]
    },
    {
      title: 'Contacto',
      links: [
        { text: 'contacto@cafemetrix.com', url: 'contacto@cafemetrix.com', isEmail: true },
        { text: 'Teléfono: 123-456-789', url: 'tel:123456789' }
      ]
    }
  ];
}
