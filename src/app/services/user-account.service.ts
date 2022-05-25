import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IUser } from '../interface/users';

const baseUrl = 'http://localhost:3000';


@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  userUrl_api: string = "http://localhost:3000/users/users";
  constructor(private _http: HttpClient) { }

  getUserList(): Observable<IUser[] > {
    return this._http.get<IUser[]>(this.userUrl_api).pipe(
      retry(3),
      catchError(this.handleError)
    );  
}

getUserById(id: any){
  return this._http.get(`${baseUrl}/users/${id}`).pipe(
    retry(2),
    catchError(this.handleError)
  )
}

updateUser(id: any, data: any): Observable<any>{
  return this._http.patch(`${baseUrl}/${id}`,data)
}
deleteUser(id: any): Observable<any>{
  return this._http.delete(`${baseUrl}/${id}`)
}

handleError(error: HttpErrorResponse){
  return throwError(()=>{new Error(error.message)})
}

}
