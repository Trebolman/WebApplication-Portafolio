import { Component } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { SubirImagenService } from '../services/subirimagen.service';

@Component({
    selector:'crear',
    templateUrl:'./crear.component.html',
    providers: [ProjectService, SubirImagenService]
})
export class CrearComponent{
    public objProject:Project;
    public creado:string;
    public files:Array<File>;
    public proyecto_creado;

    constructor(private _projectService:ProjectService,
                private _subirService:SubirImagenService){
        this.objProject = new Project("","","","",0,"","o");
    }
    
    public onSubmit(formulario){
        this._projectService.crearProyecto(this.objProject).subscribe(response=>{
            if(response.creado){
                //subir la imagen
                if(this.files){
                    this._subirService.subirImagen(response.creado._id,[],this.files,'image')
                            .then((result:any)=>{
                                //result = objProject
                                
                                this.proyecto_creado = result.project;
                                this.creado = "si";
                                console.log(this.proyecto_creado);
                            }).catch((err)=>{
                                this.creado = "no";
                            });
                }else{
                    this.proyecto_creado = response.creado;
                    this.creado = "si";
                }
            }else{
                this.creado = "no";
            }
        }, error=>{
            
        });
    }
    
    public archivoModificado(fileInput:any){
        //Casteando o convirtiendo a archivos de tipo JavaScript
        console.log("se ha cambiado la imagen");
        console.log(fileInput);
        this.files = <Array<File>>fileInput.target.files;
    }
}