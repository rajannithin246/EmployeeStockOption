import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedService } from '../shared-service/shared.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent {
  isHrAdmin: boolean = false;
  isSidebarOpen = false;
  userData: any;
  constructor(private sharedService: SharedService) {

  }

  onToggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
  ngOnInit(): void {
    this.sharedService.getUserData().subscribe((data) => {
      if (data && data.data)
        this.userData = data.data;
      this.isHrAdmin = data.data.role === 'admin';

    });
  }

}
