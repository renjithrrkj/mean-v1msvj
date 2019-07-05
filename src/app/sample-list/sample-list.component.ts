import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.css']
})
export class SampleListComponent implements OnInit {

  data: Array<any>;

  constructor(private _dataService: DataService) {

    this._dataService.getData().subscribe((res)=> {
      (console.log(res));});//res => this.data =res);
      

  }

  ngOnInit() {
    console.log(this.data);
  }

}