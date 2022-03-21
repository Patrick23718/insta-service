import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user;
  constructor() {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
  }

  ngOnInit(): void {}
}
