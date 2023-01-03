import { AuthenticationService } from './../../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(
    // private dialogRef: MatDialogRef<LoginComponent>,
    private router: Router,
    private authService: AuthenticationService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()) {
      this.router.navigate(["/"]);
    }
    this.user = {
      usuario: "",
      password: ""
    }
  }

  login(): void {
    this.authService.login(this.user.usuario, this.user.password).subscribe(
      response =>
      {
        console.log(response);
        if(response){
          this.authService.setSession(response);
          this.router.navigate(['/people']);
        }
    });
  }

}
