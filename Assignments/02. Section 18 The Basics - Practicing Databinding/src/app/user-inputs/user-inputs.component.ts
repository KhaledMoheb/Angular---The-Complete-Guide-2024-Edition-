import { Component} from '@angular/core';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrl: './user-inputs.component.css',
})
export class UserInputsComponent {
  username: string;

  onButtonClicked(){
    this.username = "";
  }
  
  get isButtonDisabled() {
    return this.username.length === 0;
  }
}
