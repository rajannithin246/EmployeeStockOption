import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { SharedService } from 'src/app/shared-service/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName :any;
  @Input() userData: any;
  @Output() toggleSidebarClick = new EventEmitter<void>();
  constructor(private sharedService: SharedService) {}
 

  onToggleSidebarClick() {
    this.toggleSidebarClick.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userData']) {
  this.userName = changes['userData'].currentValue;
  const previousValue = changes['userData'].previousValue;
}
}


}
