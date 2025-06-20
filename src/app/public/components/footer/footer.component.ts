import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import {LanguageService} from '../../../core/services/language.service';

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
  imports: [NgForOf, TranslateModule],
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerSections: FooterSection[] = [];

  constructor(private translate: TranslateService, private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.waitForTranslations().subscribe(loaded => {
      if (loaded) {
        this.loadFooterSections();
      }
    });

    this.translate.onLangChange.subscribe(() => {
      this.loadFooterSections();
    });
  }

  private loadFooterSections() {
    this.footerSections = [
      {
        title: this.translate.instant('FOOTER.QUICK_LINKS.TITLE'),
        links: [
          { text: this.translate.instant('FOOTER.QUICK_LINKS.HOME'), url: '#' },
          { text: this.translate.instant('FOOTER.QUICK_LINKS.BENEFITS'), url: '#beneficios' },
          { text: this.translate.instant('FOOTER.QUICK_LINKS.PLANS'), url: '#planes' },
          { text: this.translate.instant('FOOTER.QUICK_LINKS.CONTACT'), url: '#faq-contacto' }
        ]
      },
      {
        title: this.translate.instant('FOOTER.RESOURCES.TITLE'),
        links: [
          { text: this.translate.instant('FOOTER.RESOURCES.BLOG'), url: '#' },
          { text: this.translate.instant('FOOTER.RESOURCES.FAQ'), url: '#faq-contacto' },
          { text: this.translate.instant('FOOTER.RESOURCES.SUPPORT'), url: '#' }
        ]
      },
      {
        title: this.translate.instant('FOOTER.CONTACT_INFO.TITLE'),
        links: [
          { text: this.translate.instant('FOOTER.CONTACT_INFO.EMAIL'), url: 'contacto@cafemetrix.com', isEmail: true },
          { text: this.translate.instant('FOOTER.CONTACT_INFO.PHONE'), url: 'tel:123456789' }
        ]
      }
    ];
  }
}
