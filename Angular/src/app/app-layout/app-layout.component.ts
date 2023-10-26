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
  isSidebarOpen = false;
  constructor(private sharedService: SharedService){
    
  }
  onMenuItemClicked(componentName: string) {
    // Implement navigation logic here, e.g., using Angular Router.
    // You can navigate to the selected component based on its name.
  }

  onToggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    // this.sharedService.toggleSidebar();
    // this.sharedService.sidebarOpen$.subscribe((isOpen) => {
    //   this.isSidebarOpen = isOpen;
    // });
    
  }
  ngOnInit(): void {
    
  }

}
