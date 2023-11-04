import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sidebarOpen$ = new BehaviorSubject<boolean>(false);
  private userDataSubject = new BehaviorSubject<any>(null);
  constructor() { }

  toggleSidebar() {
    this.sidebarOpen$.next(!this.sidebarOpen$.value);
  }

  setUserData(data: any) {
    this.userDataSubject.next(data);
  }

  getUserData() {
    return this.userDataSubject.asObservable();
  }
}
