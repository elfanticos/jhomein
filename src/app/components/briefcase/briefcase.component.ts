import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.scss']
})
export class BriefcaseComponent implements OnInit {
  tecniques: any = {};
  personal: any[] = [];
  constructor(private _dataServide: DataService) {
  }

  ngOnInit(): void {
    this._dataServide.getDataTecniques()
      .subscribe(data =>this.tecniques = data || {});
    this._dataServide.getDataPersonal().subscribe(data => this.personal = data ||[])
  }

}
