import { Component, OnInit} from '@angular/core';
import { cards } from '../card/cards';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
name: string = "";
description: string = "";
dueDate: string = "";
cards =cards;

  constructor() { }

  ngOnInit(): void {
  }

handleAdd() {
this.cards.push({
  name: this.name,
  description: this.description,
  dueDate: this.dueDate,
})
this.name = ""
this.description = ""
this.dueDate = ""
}

}
