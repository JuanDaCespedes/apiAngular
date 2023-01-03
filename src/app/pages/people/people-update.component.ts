import { PeopleService } from './people.service';
import { Component, Inject, Input, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";


@Component({
    selector: 'app-people-update',
    templateUrl: './people-update.component.html'
  })
  export class PeopleUpdateComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<PeopleUpdateComponent>,
        @Inject(MAT_DIALOG_DATA) public people: any,
        private PeopleService: PeopleService
    ) {}

    ngOnInit(): void {
        if (!this.people) this.people = { 
            nombre: "", apellido: "", nombreCompleto: "", tipoIdentificacion: "", numeroIdentificacion: "", numeroIdentificacionTipo: "", email: ""
        };
    }

    getNombre(event: any): void {
        this.people.nombre = event;
    }

    getApellido(event: any): void {
        this.people.apellido = event;
    }

    getNCompleto(event: any): void {
        this.people.nombreCompleto = event;
    }

    getTIdent(event: any): void {
        this.people.tipoIdentificacion = event;
    }

    getNIdent(event: any): void {
        this.people.numeroIdentificacion = event;
    }

    getTNIdent(event: any): void {
        this.people.numeroIdentificacionTipo = event;
    }

    getEmail(event: any): void {
        this.people.email = event;
    }

    
    save(): void {
        if(this.people && this.people.id) {
            this.PeopleService.putPerson(this.people, this.people.id).subscribe(res => {
                this.dialogRef.close(res.status);
                console.log(res.status);
            });
        } else {
            this.PeopleService.postPerson(this.people).subscribe(res => {
                this.dialogRef.close(res.status);
                console.log(res.body);
            });
        }
    }
  }