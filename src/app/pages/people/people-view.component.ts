import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-people-view',
    templateUrl: './people-view.component.html'
  })
  export class PeopleViewComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public people: any) {}

    ngOnInit(): void{}
  }