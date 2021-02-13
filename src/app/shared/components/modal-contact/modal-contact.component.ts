import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.scss']
})
export class ModalContactComponent implements OnInit {
  form: FormGroup;
  constructor(
    private _fb: FormBuilder
  ) { 
    this.form = this._buildForm();
  }

  ngOnInit(): void {
  }

  private _buildForm():FormGroup {
    const inputs = {
      fullName: [null, [Validators.required, Validators.maxLength(120)]],
      email: [null, [Validators.required, Validators.maxLength(160), Validators.email]],
      description: [null, [Validators.required, Validators.maxLength(250)]],
      phone: [null]
    }
    return this._fb.group(inputs);
  }

}
