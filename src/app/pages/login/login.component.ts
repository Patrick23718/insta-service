import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { UtilisateursService } from 'src/app/shared/services/utilisateurs.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  pwd: string = '123456';
  numero: string = '698586318';
  numMsgError: string = '';
  constructor(
    private userService: UtilisateursService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  validator(): boolean {
    var res: boolean = true;
    if (this.numero.length < 9) {
      this.numMsgError = "Le numero de telephone n'est pas correcte.";
      res = false;
    }
    return res;
  }

  login() {
    this.userService.login(this.numero, this.pwd).subscribe((res) => {
      if (res.role !== 'admin') {
        console.log('pas connecter');
      } else {
        const user = {
          id: res.id,
          imageURL: res.imageURL,
          nom: res.nom,
          numero: res.numero,
          prenom: res.prenom,
          role: res.role,
        };
        localStorage.setItem('x-access-token', res.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigateByUrl('/dashboard');
      }
    });
  }
}
