import { Component, OnInit, Input} from '@angular/core';
import { cards } from './cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() name:string = "";
@Input() description: string ="";
@Input() dueDate: string = "";
@Input() index!: number;

cards = cards;

  constructor() { }

  ngOnInit(): void {
    
  }

  onDelete(index: number) {
    this.cards.splice(index,1)
  }

}
