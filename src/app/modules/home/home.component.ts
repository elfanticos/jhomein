import { Component, OnInit } from '@angular/core';
import { HomeService } from './shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this._homeService.articleLast().subscribe(data => {
      console.log(data);
    })
  }

}
