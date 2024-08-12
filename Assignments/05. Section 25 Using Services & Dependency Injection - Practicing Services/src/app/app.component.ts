import { Component, inject } from '@angular/core';
import { UsersService } from './services/users/users.service';
import { CounterService } from './services/counter/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private usersService = inject(UsersService);
  private counterService = inject(CounterService);
  
  get activeUsers() {
    return this.usersService.ActiveUsers;
  }
  
  get inactiveUsers() {
    return this.usersService.InactiveUsers;
  }

  get inactiveToActiveActions(){
    return this.counterService.ActiveUsersCounter;
  }

  get activeToInactiveActions(){
    return this.counterService.InactiveUsersCounter;
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
