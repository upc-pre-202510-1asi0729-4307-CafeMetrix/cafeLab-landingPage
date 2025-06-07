import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [TranslateModule, CommonModule],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentLanguage = 'ES';

  constructor(private translate: TranslateService) {

    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  toggleLanguage() {
    const newLang = this.currentLanguage === 'ES' ? 'EN' : 'ES';
    const langCode = newLang === 'ES' ? 'es' : 'en';

    this.currentLanguage = newLang;
    this.translate.use(langCode);
  }
}
