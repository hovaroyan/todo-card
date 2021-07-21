import { Component } from '@angular/core';
import { cards } from './card/cards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 cards = cards;
 
}
