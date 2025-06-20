import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import {LanguageService} from '../../../core/services/language.service';

interface DataFeature {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

@Component({
  selector: 'app-data-section',
  templateUrl: './data-section.component.html',
  imports: [NgForOf, TranslateModule],
  styleUrls: ['./data-section.component.css']
})
export class DataSectionComponent implements OnInit {
  features: DataFeature[] = [];

  constructor(private languageService: LanguageService, private translate: TranslateService) {};

  ngOnInit() {
    this.languageService.waitForTranslations().subscribe(loaded => {
      if (loaded) {
        this.loadFeatures();
      }
    });

    this.translate.onLangChange.subscribe(() => {
      this.loadFeatures();
    });
  }

  private loadFeatures() {
    this.features = [
      {
        title: this.translate.instant('DATA_SECTION.INVENTORY_DASHBOARD.TITLE'),
        description: this.translate.instant('DATA_SECTION.INVENTORY_DASHBOARD.DESCRIPTION'),
        image: '/dashboard_inventario.png',
        reverse: false
      },
      {
        title: this.translate.instant('DATA_SECTION.ROASTING_CURVES.TITLE'),
        description: this.translate.instant('DATA_SECTION.ROASTING_CURVES.DESCRIPTION'),
        image: '/curva_tueste.png',
        reverse: true
      }
    ];
  }
}
