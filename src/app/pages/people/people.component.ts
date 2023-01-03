import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from './people.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PeopleUpdateComponent } from './people-update.component';
import { PeopleViewComponent } from './people-view.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent  implements OnInit {

  personas: any[] = [];
  displayedColumns: string[] = ['id', 'nombreCompleto', 'numeroIdentificacionTipo', 'email', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    private PeopleService: PeopleService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.PeopleService.getPeople().subscribe(res => {
      if(res.body){
        console.log(res.body);
        this.personas = res.body;
        this.dataSource.data = this.personas;
        this.dataSource.sort = this.sort!;
        this.dataSource.paginator = this.paginator!;

      }
    })
  }

  editPeople(people?: any): void {
    const dialogRef = this.dialog.open(PeopleUpdateComponent, {
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

  viewPeople(id: string): void {
    this.PeopleService.getPerson(id).subscribe(res => {
      if (res.body) {
        console.log(res.body);
        this.dialog.open(PeopleViewComponent, {
          data: res.body,
          width: '63%'
        });
      }
    })
  }

  deletePeople(id: string): void {
    this.PeopleService.deletePerson(id).subscribe(res => {
      if (res.status === 200) this.ngOnInit();
    })
  }

}
