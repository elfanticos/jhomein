import { Component, HostBinding, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  active: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleClass(event: any, className: string) {
    const hasClass = event.target.classList.contains(className);
    this.active = !hasClass;
  }
}
