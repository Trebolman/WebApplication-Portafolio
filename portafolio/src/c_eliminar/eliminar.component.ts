import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project'; 

@Component({
    selector:'eliminar',
    templateUrl:'./eliminar.component.html',
    providers: [ProjectService]
})
export class EliminarComponent{
    public proyectos:Array<Array<Project>>;
    constructor(private _projectService:ProjectService){}
    
}