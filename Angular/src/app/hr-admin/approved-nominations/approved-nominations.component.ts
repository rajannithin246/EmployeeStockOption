import { Component } from '@angular/core';

@Component({
  selector: 'app-approved-nominations',
  templateUrl: './approved-nominations.component.html',
  styleUrls: ['./approved-nominations.component.css']
})
export class ApprovedNominationsComponent {
  displayedColumns: string[] = ['column1', 'column2', 'column3', 'column4', 'column5'];
  dataSource = [
    { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5' },
    // Add more data as needed
  ];

}
