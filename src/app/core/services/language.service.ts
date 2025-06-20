import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('es');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();
  private translationsLoadedSubject = new BehaviorSubject<boolean>(false);
  public translationsLoaded$ = this.translationsLoadedSubject.asObservable();

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.initializeTranslations();
  }

  private initializeTranslations() {
    this.translate.use('es').subscribe(() => {
      this.translationsLoadedSubject.next(true);
    });
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  getCurrentLanguageDisplay(): string {
    return this.currentLanguageSubject.value === 'es' ? 'ES' : 'EN';
  }

  switchLanguage(): void {
    const newLang = this.currentLanguageSubject.value === 'es' ? 'en' : 'es';
    this.translate.use(newLang).subscribe(() => {
      this.currentLanguageSubject.next(newLang);
      this.translationsLoadedSubject.next(true);
    });
  }

  setLanguage(lang: string): void {
    this.translate.use(lang).subscribe(() => {
      this.currentLanguageSubject.next(lang);
      this.translationsLoadedSubject.next(true);
    });
  }

  waitForTranslations(): Observable<boolean> {
    return this.translationsLoaded$;
  }
}
