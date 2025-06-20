import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import {LanguageService} from '../../../core/services/language.service';

interface Plan {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
}

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  imports: [NgForOf, TranslateModule],
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans: Plan[] = [];

  constructor(private translate: TranslateService, private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.waitForTranslations().subscribe(loaded => {
      if (loaded) {
        this.loadPlans();
      }
    });

    this.translate.onLangChange.subscribe(() => {
      this.loadPlans();
    });
  }

  private loadPlans() {
    this.plans = [
      {
        title: this.translate.instant('PLANS.BASE_PLAN.TITLE'),
        price: this.translate.instant('PLANS.BASE_PLAN.PRICE'),
        features: this.translate.instant('PLANS.BASE_PLAN.FEATURES'),
        buttonText: this.translate.instant('PLANS.BASE_PLAN.BUTTON')
      },
      {
        title: this.translate.instant('PLANS.TECHNICAL_PLAN.TITLE'),
        price: this.translate.instant('PLANS.TECHNICAL_PLAN.PRICE'),
        features: this.translate.instant('PLANS.TECHNICAL_PLAN.FEATURES'),
        buttonText: this.translate.instant('PLANS.TECHNICAL_PLAN.BUTTON')
      },
      {
        title: this.translate.instant('PLANS.ARTIST_PLAN.TITLE'),
        price: this.translate.instant('PLANS.ARTIST_PLAN.PRICE'),
        features: this.translate.instant('PLANS.ARTIST_PLAN.FEATURES'),
        buttonText: this.translate.instant('PLANS.ARTIST_PLAN.BUTTON')
      },
      {
        title: this.translate.instant('PLANS.SPECIALTY_PLAN.TITLE'),
        price: this.translate.instant('PLANS.SPECIALTY_PLAN.PRICE'),
        features: this.translate.instant('PLANS.SPECIALTY_PLAN.FEATURES'),
        buttonText: this.translate.instant('PLANS.SPECIALTY_PLAN.BUTTON')
      }
    ];
  }

  onPlanSelect(plan: Plan) {
    console.log('Plan selected:', plan.title);
  }
}
