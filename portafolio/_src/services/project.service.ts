import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService{
    constructor(private _http: HttpClient){
    
    }

    testService(){
        return "Probando el servicio de Project";
    }

    crearProyecto(objProyecto:Project): Observable<any>{
        let objProyectoJSON = JSON.stringify(objProyecto);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post("http://localhost:3700/api/create-project",objProyectoJSON,{headers:headers});
    }

    getProyectos():Observable<any>{
        let misHeaders = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get("http://localhost:3700/API/projects",{headers:misHeaders});
    }
}