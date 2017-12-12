import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isNavbarCollapse: Boolean = false ;
  isSidebarCollapse: Boolean = false ;
  toggleSideBar() {
    this.isNavbarCollapse = !this.isNavbarCollapse ;
  }
  toggleNavBar() {
    this.isSidebarCollapse = !this.isSidebarCollapse ;
    this.isNavbarCollapse = false ;
  }
}
