import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  @Input() skills: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
