import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  colors = ["blue", "red", "yellow", "green", "orange"];
  color = 0;
  message = "Hello World!";

  constructor() { }

  ngOnInit() {
  }

  click(){
    if(this.color >= (this.colors.length - 1)){
      this.color = 0;
    } else {
      this.color = this.color + 1;
    }
  }
}
