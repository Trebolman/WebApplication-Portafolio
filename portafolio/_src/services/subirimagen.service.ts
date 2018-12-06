import { Injectable } from '@angular/core';

@Injectable()
export class SubirImagenService{
    constructor(){}
    subirImagen(id:string, parametros:Array<string>, files:Array<File>, name:string){
        return new Promise(function(resolve,reject){
            var formData:any = new FormData();
            var xhr = new XMLHttpRequest();
            
            for(var i=0; i<files.length; i++){
                formData.append(name, files[i], files[i].name);
            }

            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response));
                    }else{
                        reject(xhr.response);
                    }
                }
            }
            xhr.open('POST','http://localhost:3700/API/upload-image/'+id, true);
            xhr.send(formData);
        });
    }
}