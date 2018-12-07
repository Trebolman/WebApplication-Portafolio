import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project'; 

// Agregamos el enrutador para trabajar con las urls
import { Router,ActivatedRoute } from '@angular/router';
// import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
    selector:'detalle',
    templateUrl:'./detalle.component.html',
    providers: [ProjectService]
})
export class DetalleComponent implements OnInit{
    public proyecto:Project;
    public id:string;
    // public aux:Array<Project> = new Array();
    constructor(private _projectService:ProjectService,
                private _router:Router,
                private _routeActivate:ActivatedRoute){}
    
    ngOnInit(){
        this._routeActivate.params.subscribe(
            params=>{
                // console.log(params.i d);
                // console.log(typeof(params.id));
                this.id = params.id;
            }
        );
        this.getProyectoById();
    }
    public getProyectoById(){
        this._projectService.getProyectoById(this.id).subscribe(
            response=>{
                // console.log(`"La respuesta es: ${response.found}"`);
                // console.log(response);
                console.log(response.found);
                // this.obj = JSON.parse(response.found);
                this.proyecto = response.found;
            }
        );
    }
}