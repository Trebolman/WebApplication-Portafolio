import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector:'editar',
    // templateUrl:'./editar.component.html',
    templateUrl: '../c_crear/crear.component.html',
    providers: [ProjectService]
})
export class EditarComponent implements OnInit{
    public Titulo:string = "Editar proyecto";
    public descripcion:string = "Formulario para editar un proyecto";
    public objProject:Project;
    public id:string;
    constructor(private _router:Router,
                private _route:ActivatedRoute,
                private _projectService:ProjectService){}

    public ngOnInit():void{
        this._route.params.subscribe(
            params=>{
                this.id = params.id; //tengo aqui mi parametro 
            }
        );
        this.setProyecto();
    }

    setProyecto(){
        this._projectService.getProyectoById(this.id).subscribe(
            response=>{
                this.objProject = response.found;
            },error=>{
                console.log(error);
            }
        );
    }

}