import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project'; 
import {Router, ActivatedRoute} from '@angular/router';
// import { $ } from 'protractor';
@Component({
    selector:'mostrar',
    templateUrl:'./mostrar.component.html',
    providers: [ProjectService]
})
export class MostrarComponent implements OnInit{
    public proyectos:Array<Array<Project>> = new Array();
    public aux:Array<Project> = new Array();
    public idAEliminar:string;
    constructor(private _projectService:ProjectService,
                private _router:Router,
                private _route:ActivatedRoute
                ){}
    
    ngOnInit(){
        this.getProyectos();
    }
    public getProyectos(){
        this._projectService.getProyectos().subscribe(
            response=>{
                for(let i = 0; i < response.projects.length;i++){
                    this.aux.push(response.projects[i]);
                    if((i+1)%3==0){
                        this.proyectos.push(this.aux);
                        this.aux = [];
                    }
                    if(i == response.projects.length-1){
                        this.proyectos.push(this.aux);
                    }
                }
                console.log(this.proyectos);
            }
        );
    }

    public onEliminar():void{
        // tras eliminar la pagina, se debe recargar
        this._projectService.deleteProjectById(this.idAEliminar).subscribe(
            response=>{
                console.log(response);
                // this._router.navigate(['mostrar']);
                // $(#eliminarModal).hide();
            },err=>{
                console.log("Error en proceso de eliminacion");
            }
        );
    }

    public setProyectoEliminar(id:string){
        // alert(id);
        this.idAEliminar = id;
    }
}