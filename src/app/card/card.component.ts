import { Component, OnInit, Input} from '@angular/core';
import { ICard } from './cards';


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
@Input() data!: Array<ICard>;


  constructor() { }

  ngOnInit(): void {
    
  }

  onDelete(index: number) {
    this.data.splice(index,1)
  }

}
