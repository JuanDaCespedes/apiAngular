import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserCreateComponent } from './user-create.component';
import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent  implements OnInit {

  users: any[] = [];
  displayedColumns: string[] = ['id', 'usuario', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    private UserService: UserService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(res => {
      if(res.body){
        console.log(res.body);
        this.users = res.body;
        this.dataSource.data = this.users;
        this.dataSource.sort = this.sort!;
        this.dataSource.paginator = this.paginator!;

      }
    })
  }

  CreateUser(people?: any): void {
    const dialogRef = this.dialog.open(UserCreateComponent, {
      data: people,
      width: '63%'
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data === 200 || data === 201) {
        console.log(data);
        this.ngOnInit();
      }
    });
  }

  deleteUser(id: string): void {
    this.UserService.deleteUser(id).subscribe(res => {
      if (res.status === 200) this.ngOnInit();
    })
  }

}
