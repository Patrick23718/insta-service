import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from 'src/app/shared/services/utilisateurs.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss'],
})
export class UtilisateursComponent implements OnInit {
  server = environment.serverURL;
  constructor(private userService: UtilisateursService) {}

  users: any[] = [];
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res: any) => {
      console.log(res);
      this.users = res;
    });
  }
}
