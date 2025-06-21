import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  imports: [TranslateModule],
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  onRegister() {
    window.open('https://coffee-lab-10031.web.app/login', '_blank');
  }
}
