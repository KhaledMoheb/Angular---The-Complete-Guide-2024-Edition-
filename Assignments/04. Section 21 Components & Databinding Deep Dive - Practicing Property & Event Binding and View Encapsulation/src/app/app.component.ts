import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];

  AddNumber(number: number){
    this.numbers = [number, ...this.numbers];
  }

  get eventEntries(){
    return this.numbers;
  }
}
