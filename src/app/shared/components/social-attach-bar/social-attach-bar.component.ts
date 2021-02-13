import { Component, OnInit } from '@angular/core';
import { SharedConstants } from '@app/shared/shared.constant';

@Component({
  selector: 'app-social-attach-bar',
  templateUrl: './social-attach-bar.component.html',
  styleUrls: ['./social-attach-bar.component.scss']
})
export class SocialAttachBarComponent implements OnInit {
  PATH_GITHUB = SharedConstants.PATH_SOCIAL.GITHUB;
  PATH_LINKEDIN = SharedConstants.PATH_SOCIAL.LINKEDIN;
  PATH_TELEGRAM = SharedConstants.PATH_SOCIAL.TELEGRAM;
  constructor() { }

  ngOnInit(): void {
  }

}
