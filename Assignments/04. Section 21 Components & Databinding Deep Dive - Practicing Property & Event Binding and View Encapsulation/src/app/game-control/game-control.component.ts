import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  @Output() CounterIncreamented = new EventEmitter();

  counter:number = 0;
  intervalRef = undefined;

  StartGameClicked(){
    this.StartInterval();
  }

  StopGameClicked(){
    this.StopInterval();
  }

  StopInterval(){
    if(this.intervalRef){
      clearInterval(this.intervalRef);
      this.intervalRef = undefined;
    }
  }

  StartInterval(){
    this.intervalRef = setInterval(()=>{
      this.counter++;
      this.CounterIncreamented.emit(this.counter);
    }, 1000);
  }
}
