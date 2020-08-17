import { Component, ViewChild, ElementRef } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {

  public searchText : string;

  constructor() { }

  @ViewChild('table', { static: true}) table: ElementRef;  

  public SavePDF(): void {
    const options = {
      filename: "PDF",
      image: { type: "jpeg" },
      html2canvas: {},
      jsPDF: { orientation: 'landscape' }
    };

    const ele: Element = document.getElementById('table');

    html2pdf().from(ele).set(options).save();
  }

  exportexcel(): void {
    let fileName= 'ExcelSheet.xlsx';
    
    const element: Element = document.getElementById('table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, fileName);		
  }

  arr = [
    {
      id: "111ee556ab7ab8d",
      farmer: "Jon Doe",
      appdate: "Nov 14 2019",
      transdate: "40,000/-",
      appstatus: "PENDING",
      cmastatus: "SUCCESSFUl",
    },
    {
      id: "512ee556ab7ab8d",
      farmer: "Harshala Pawar",
      appdate: "Jan 10 2019",
      transdate: "40,000/-",
      appstatus: "PENDING",
      cmastatus: "SUCCESSFUl",
    },
    {
      id: "111ee556ab7ab8d",
      farmer: "Harshala Pawar",
      appdate: "Feb 14 2015",
      transdate: "40,000/-",
      appstatus: "PENDING",
      cmastatus: "SUCCESSFUl",
    },
    {
      id: "222ee556ab7ab8d",
      farmer: "Ram Prasad",
      appdate: "Nov 14 2019",
      transdate: "40,000/-",
      appstatus: "PENDING",
      cmastatus: "SUCCESSFUl",
    },
    {
      id: "512ee556ab7ab8d",
      farmer: "Harshala Pawar",
      appdate: "Jan 10 2019",
      transdate: "24,000/-",
      appstatus: "PENDING",
      cmastatus: "SUCCESSFUl",
    },
    {
      id: "222ee556ab7ab8d",
      farmer: "Harshala Pawar",
      appdate: "Nov 14 2019",
      transdate: "40,000/-",
      appstatus: "PENDING",
      cmastatus: "SUCCESSFUl",
    }
  ]

}
