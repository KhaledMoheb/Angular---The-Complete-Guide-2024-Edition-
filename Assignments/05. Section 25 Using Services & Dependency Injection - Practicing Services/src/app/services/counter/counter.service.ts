import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private activeUsersCounter = signal(0);
  private inactiveUsersCounter = signal(0);

  get ActiveUsersCounter(){
    return this.activeUsersCounter.asReadonly();
  }

  get InactiveUsersCounter(){
    return this.inactiveUsersCounter.asReadonly();
  }

  IncreamentInactiveUsersCounter(){
    this.inactiveUsersCounter.set(this.inactiveUsersCounter() + 1);
  }

  IncreamentActiveUsersCounter(){
    this.activeUsersCounter.set(this.activeUsersCounter() + 1);
  }
}
