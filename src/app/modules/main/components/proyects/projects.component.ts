import { Component, OnInit } from '@angular/core';
import { SharedConstants } from '@app/shared/shared.constant';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  PROJECTS: any[] = SharedConstants.PROJECTS;
  constructor() { }

  ngOnInit(): void {
  }

  redirectProject(path: string): void {
    window.open(path, "_blank");
  }

}
