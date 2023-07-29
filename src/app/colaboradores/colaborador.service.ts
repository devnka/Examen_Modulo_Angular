import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Colaborador } from './colaborador';

@Injectable({
  providedIn: 'root'
})

export class ColaboradorService {

  private apiURL = "http://localhost:8000/api/colaborador/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Colaborador[]> {
   return this.httpClient.get<Colaborador[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(colaborador): Observable<Colaborador> {
   return this.httpClient.post<Colaborador>(this.apiURL, JSON.stringify(colaborador), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Colaborador> {
   return this.httpClient.get<Colaborador>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, colaborador): Observable<Colaborador> {
   return this.httpClient.put<Colaborador>(this.apiURL + id, JSON.stringify(colaborador), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Colaborador>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}
