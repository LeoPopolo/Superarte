import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-sidebar',
  templateUrl: './mobile-sidebar.component.html',
  styleUrls: ['./mobile-sidebar.component.scss']
})
export class MobileSidebarComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() sectionSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectSection(section: string) {
    this.sectionSelected.emit(section);
    this.closeSidebar();
  }

  closeSidebar() {
    this.close.emit();
  }
}
