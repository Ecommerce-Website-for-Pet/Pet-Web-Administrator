import { IAdmin } from './../interface/admins';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry, throwError } from 'rxjs';
const url_api="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class AdminAccountService {
  constructor(private _http: HttpClient) { }

  getAdminList(): Observable<IAdmin[] > {
    return this._http.get<IAdmin[]>(`${url_api}/admins/admins`).pipe(
      retry(3),
      catchError(this.handleError)
    );  
  }
  handleError(error: HttpErrorResponse){
  return throwError(()=>{new Error(error.message)})
  }
  getAdminById(id: any):Observable<IAdmin>{
    return this._http.get<IAdmin>(`${url_api}/${id}`);
  }
  postAdmin(data:IAdmin){
    return this._http.post(`${url_api}/admins/admin`,data);
  }
  updateAdmin(id:any,data:any):Observable<any>{
    return this._http.patch(`${url_api}/${id}`,data);
  }
  deleteAdmin(id:any):Observable<any>{
    return this._http.delete(`${url_api}/${id}`);
  }
}