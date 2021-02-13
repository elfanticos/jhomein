import { Component, OnInit } from '@angular/core';
import { SharedConstants } from '@app/shared/shared.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  PATH_GITHUB = SharedConstants.PATH_SOCIAL.GITHUB;
  PATH_LINKEDIN = SharedConstants.PATH_SOCIAL.LINKEDIN;
  PATH_TELEGRAM = SharedConstants.PATH_SOCIAL.TELEGRAM;
  constructor() { }

  ngOnInit(): void {
  }

}
