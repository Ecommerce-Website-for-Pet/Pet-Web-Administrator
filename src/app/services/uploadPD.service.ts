import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { IProduct } from '../interface/products';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry, throwError } from 'rxjs';
const url_api="http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class UploadPDService {
  readonly api_url = 'http://localhost:3000'
   constructor(private _http: HttpClient) { }
  
  uploadData(data: any){
    return this._http.post(`${this.api_url}/upload`,data).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  getAllProducts(){
    return this._http.get(`${this.api_url}/products`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  getProductInfo(id: any){
    return this._http.get(`${this.api_url}/products/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  
  // handleError(err:HttpErrorResponse){
  //   return throwError(()=>new Error(err.message))
  // }
  

  // getPDList(): Observable<IProduct[] > {
  //   return this._http.get<IProduct[]>(`${url_api}/products`).pipe(
  //     retry(3),
  //     catchError(this.handleError)
  //   );  
  // }
  handleError(error: HttpErrorResponse){
  return throwError(()=>{new Error(error.message)})
  }
  // getProductById(id: any):Observable<IProduct>{
  //   return this._http.get<IProduct>(`${url_api}/${id}`);
  // }
  // postProduct(data:IProduct){
  //   return this._http.post(`${url_api}/product`,data);
  // }
  // updateProduct(id:any,data:any):Observable<any>{
  //   return this._http.patch(`${url_api}/${id}`,data);
  // }
  deleteProduct(id:any):Observable<any>{
    return this._http.delete(`${url_api}/${id}`);
  }
}
