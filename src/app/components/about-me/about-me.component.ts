import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedConstants } from 'src/app/shared/shared.constants';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(
    private _iconRegistry: MatIconRegistry,
        private _sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.setIconSvg();
  }

  setIconSvg() {
    this._iconRegistry.addSvgIcon('arrow_drop_down_circle', this._sanitizer.bypassSecurityTrustResourceUrl(SharedConstants.ICONS.arrow_drop_down_circle));
  }
}
