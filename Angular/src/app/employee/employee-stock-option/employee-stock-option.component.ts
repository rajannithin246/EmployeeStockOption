import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-stock-option',
  templateUrl: './employee-stock-option.component.html',
  styleUrls: ['./employee-stock-option.component.css']
})
export class EmployeeStockOptionComponent {

  displayedColumns: string[] = ['Cycle Name', 'Grant Date', 'Vesting Date', 'Grant # of shares', 'Vesting # of Shares',
  'Forfeiture # of Shares','Balance # of Shares'];
    dataSource = [
      { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5',column6: 'Data 6',column7: 'Data 7' },
      // Add more data as needed
    ];
}
