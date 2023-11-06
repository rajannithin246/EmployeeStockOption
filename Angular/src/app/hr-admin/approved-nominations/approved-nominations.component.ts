import { Component } from '@angular/core';
import * as ExcelJS from 'exceljs';

@Component({
  selector: 'app-approved-nominations',
  templateUrl: './approved-nominations.component.html',
  styleUrls: ['./approved-nominations.component.css']
})
export class ApprovedNominationsComponent {
  dataSource:any = [];
  displayedColumns:any = [];
  // displayedColumns: string[] = ['column1', 'column2', 'column3', 'column4', 'column5'];
  // dataSource = [
  //   { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5' },
  // ];

  onFileChange(event: any): void {
    const file = event.target.files[0];
    const workbook = new ExcelJS.Workbook();

    workbook.xlsx.load(file).then((workbook) => {
      const worksheet = workbook.getWorksheet(1);

      if (worksheet) {
        const jsonData: { [key: string]: any }[] = [];

        worksheet.eachRow((row, rowNumber) => {
          if (rowNumber !== 1) { // Skip the header row
            const rowData: { [key: string]: any } = {};
            row.eachCell((cell, colNumber) => {
              rowData[`column${colNumber}`] = cell.value;
            });
            jsonData.push(rowData);
          }
        });

        this.dataSource = jsonData;
        this.displayedColumns = Object.keys(jsonData[0]);
      } else {
        console.error("Worksheet is undefined. Please check your Excel file.");
      }
    });
  }
  

}
