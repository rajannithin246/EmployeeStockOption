import { Component, EventEmitter, Output,HostListener, Input,SimpleChanges, OnChanges   } from '@angular/core';
import { SharedService } from '../shared-service/shared.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnChanges  {
  @Output() menuItemClicked = new EventEmitter<string>();
  @Input() isToggled: any;
  isSidebarOpen = false;

  constructor(){

  }

  ngOnInit(): void {
   
  }
  ngOnChanges(changes: SimpleChanges) {
        if (changes['isToggled']) {
      const newValue = changes['isToggled'].currentValue;
      const previousValue = changes['isToggled'].previousValue;
      this.toggleSidebar(newValue);
      
    }
  }

  toggleSidebar(newValue:boolean) {
    this.isSidebarOpen = !newValue;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isSidebarOpen = window.innerWidth > 768; // Adjust the breakpoint as needed
  }

  navigateToComponent(componentName: string) {
    this.menuItemClicked.emit(componentName);

  }

}
