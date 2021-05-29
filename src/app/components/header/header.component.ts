import { Component, OnInit } from '@angular/core';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    downloadPdf() {
        const pdfUrl = './assets/sample.pdf';
        const pdfName = 'your_pdf_file';
        FileSaver.saveAs(pdfUrl, pdfName);
    } 
    status: boolean = false;
    clickEvent(){
        this.status = !this.status;       
    }
  constructor() { }

  ngOnInit(): void {
  }

}
