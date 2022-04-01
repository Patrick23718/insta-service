import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user;
  constructor(private router: Router) {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
  }

  ngOnInit(): void {}

  logOut() {
    localStorage.removeItem('x-access-token');
    window.location.reload();
    // this.router.routeReuseStrategy.shouldReuseRoute = () => {
    //   return false;
    // };
  }
}
