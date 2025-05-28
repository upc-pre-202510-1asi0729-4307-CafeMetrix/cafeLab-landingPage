import { Component } from '@angular/core';
import {HeaderComponent} from './public/components/header/header.component';
import {HeroComponent} from './public/components/hero/hero.component';
import {BenefitsComponent} from './public/components/benefits/benefits.component';
import {DataSectionComponent} from './public/components/data-section/data-section.component';
import {PlansComponent} from './public/components/plans/plans.component';
import {TestimonialsComponent} from './public/components/testimonials/testimonials.component';
import {FaqContactComponent} from './public/components/faq-contact/faq-contact.component';
import {FooterComponent} from './public/components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    HeroComponent,
    BenefitsComponent,
    DataSectionComponent,
    PlansComponent,
    TestimonialsComponent,
    FaqContactComponent,
    FooterComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cafelab';
}
