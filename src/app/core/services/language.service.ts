import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('es');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor(private translate: TranslateService) {
    // Initialize with default language
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  getCurrentLanguageDisplay(): string {
    return this.currentLanguageSubject.value === 'es' ? 'ES' : 'EN';
  }

  switchLanguage(): void {
    const newLang = this.currentLanguageSubject.value === 'es' ? 'en' : 'es';
    this.translate.use(newLang);
    this.currentLanguageSubject.next(newLang);
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLanguageSubject.next(lang);
  }
}
