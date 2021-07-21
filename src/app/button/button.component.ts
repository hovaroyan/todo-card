import {Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() text:string = "";
@Input() background:string = "";
@Input() color:string = "";


  constructor() { }

  ngOnInit(): void {
  }

}


