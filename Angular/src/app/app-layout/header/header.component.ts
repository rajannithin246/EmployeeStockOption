import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from 'src/app/shared-service/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSidebarClick = new EventEmitter<void>();
  constructor(private sharedService: SharedService) {}
  // toggleSidebar() {
  //   this.sharedService.toggleSidebar();
  // }

  onToggleSidebarClick() {
    this.toggleSidebarClick.emit();
  }

}
