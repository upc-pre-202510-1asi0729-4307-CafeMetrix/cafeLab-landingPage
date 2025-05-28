import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentLanguage = 'ES';

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'ES' ? 'EN' : 'ES';
  }
}
