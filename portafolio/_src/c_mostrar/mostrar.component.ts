import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project'; 

@Component({
    selector:'mostrar',
    templateUrl:'./mostrar.component.html',
    providers: [ProjectService]
})
export class MostrarComponent implements OnInit{
    public proyectos:Array<Project>;
    constructor(private _projectService:ProjectService){}
    
    ngOnInit(){
        this.getProyectos();
    }
    public getProyectos(){
        this._projectService.getProyectos().subscribe(
            response=>{
                console.log(response);
                this.proyectos = response.projects;
            },
            error=>{
                console.log(error);
            }
        );
    }
}