import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilesSvcService {

  baseUrl = 'http://localhost:8080'

  //Inyeccion de HttpClient
  constructor(private http: HttpClient) { }

  //Metodo que envia los archivos al endpoint /upload 
  upload(file: File): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('files', file);
   
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  //Metodo para Obtener los archivos
  getFiles(){
    return this.http.get(`${this.baseUrl}/files`);
  }

  //Metodo para borrar los archivos
  deleteFile(filename: string){
    return this.http.get(`${this.baseUrl}/delete/${filename}`);
  }

}
