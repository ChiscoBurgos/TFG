import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DatosApp } from './datos-app';
import { IpcRenderer } from 'electron';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DatosAppService {

  datosUrl = "./assets/datosApp.json";
  fsCall: any;

  constructor(private http: HttpClient) { 
    this.fsCall = (window as any).fs;
  }

  getDatos(){
    return this.fsCall.readFile(this.datosUrl, function read(err, data) {
      if (err) {
          throw err;
      }
      return JSON.parse(data)})
  }
  
}
