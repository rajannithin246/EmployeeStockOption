import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sidebarOpen$ = new BehaviorSubject<boolean>(false);
  constructor() { }

  toggleSidebar() {
    this.sidebarOpen$.next(!this.sidebarOpen$.value);
  }
}
