import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalContactComponent } from '@app/shared/components/modal-contact/modal-contact.component';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor(
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openModalContact(): void {
    const diaalogRef = this._dialog.open(ModalContactComponent, {
      width: '520px'
    });
  }
}
