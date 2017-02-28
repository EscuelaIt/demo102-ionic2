import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'my-hero',
  templateUrl: 'my-hero.html'
})
export class MyHeroComponent {

  @Input() hero: User = new User();

  constructor() {
    
  }

}
