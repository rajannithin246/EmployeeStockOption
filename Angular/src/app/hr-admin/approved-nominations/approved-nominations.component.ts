import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-approved-nominations',
  templateUrl: './approved-nominations.component.html',
  styleUrls: ['./approved-nominations.component.css']
})
export class ApprovedNominationsComponent {
  dataSource:any = [];
  displayedColumns:any = [];
  onFileChange(event: any): void {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      const dataSource= XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      this.displayedColumns = dataSource[0];
      this.dataSource = jsonData.slice(1);
    };

    reader.readAsArrayBuffer(file);
  }
  

}
