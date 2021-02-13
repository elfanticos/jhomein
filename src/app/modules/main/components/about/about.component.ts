import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContactComponent } from '@app/shared/components/modal-contact/modal-contact.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private _dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openModalContact(): void {
    const diaalogRef = this._dialog.open(ModalContactComponent, {
      width: '520px'
    });
  }

}
