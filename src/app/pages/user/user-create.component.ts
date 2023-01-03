import { UserService } from './user.service';
import { Component, Inject, Input, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";


@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html'
  })
  export class UserCreateComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<UserCreateComponent>,
        @Inject(MAT_DIALOG_DATA) public user: any,
        private UserService: UserService
    ) {}

    ngOnInit(): void {
        if (!this.user) this.user = { 
            usuario: "", pass: ""
        };
    }

    getUser(event: any): void {
        this.user.usuario = event;
    }

    getPass(event: any): void {
        this.user.pass = event;
    }
    
    save(): void {
        this.UserService.postUser(this.user).subscribe(res => {
            this.dialogRef.close(res.status);
            console.log(res.body);
        });
    }
  }