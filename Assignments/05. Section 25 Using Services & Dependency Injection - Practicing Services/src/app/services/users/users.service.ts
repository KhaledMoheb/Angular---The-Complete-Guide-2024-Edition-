import { inject, Injectable, signal } from '@angular/core';
import { CounterService } from '../counter/counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private counterService = inject(CounterService);

  private activeUsers = signal(['Max', 'Anna']);
  private inactiveUsers = signal(['Chris', 'Manu']);

  get ActiveUsers(){
    return this.activeUsers.asReadonly();
  }

  get InactiveUsers(){
    return this.inactiveUsers.asReadonly();
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.set([...this.inactiveUsers(), this.activeUsers()[id]]);
    this.activeUsers.set(this.activeUsers().filter((value, index) => index != id));
    this.counterService.IncreamentInactiveUsersCounter();
  }

  onSetToActive(id: number) {
    this.activeUsers.set([...this.activeUsers(),this.inactiveUsers()[id]]);
    this.inactiveUsers.set(this.inactiveUsers().filter((value, index) => index != id));
    this.counterService.IncreamentActiveUsersCounter();
  }
}
