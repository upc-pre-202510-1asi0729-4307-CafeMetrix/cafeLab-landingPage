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
    console.log('Registration clicked');
  }
}
