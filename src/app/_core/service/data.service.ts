import {Injectable} from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';

import {tap,catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {environment} from './../../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type":
      "application/json;charset=UTF-8"
  })
};
let urlApi = ``;
@Injectable({
providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
     urlApi = environment.urlAPI;
  }
  //GET
  public Get(uri: string, paramsOptions ? : Object) {
    paramsOptions = Object.assign(httpOptions, {
      params: paramsOptions
    });
    return this.http.get(urlApi + '/' + uri, paramsOptions).pipe(
      tap(() => {}),
      catchError((err) => {
        return this.handleError(err)
      })
    )
  }
  //POST
  public Post(uri:string,data?: object,paramsOptions ?:Object){
    paramsOptions = Object.assign(httpOptions, {
      params: paramsOptions
    });
    return this.http.post(urlApi + '/' + uri,data, paramsOptions).pipe(
      tap(() => {}),
      catchError((err) => {
        return this.handleError(err)
      })
    )
  }
  //DELETE
  public Delete(uri:string){
    return this.http.delete(urlApi + '/' + uri).pipe(
      tap(()=>{}),
      catchError((err) =>{
        return this.handleError(err);
      })
    )
  }
  //UPLOAD FILES
  public uploadFile(body):Observable<any> {
    let api = `http://svcy2.myclass.vn/api/quanlyphim/UploadFile`;
    let obServable = this.http.post(api,body).pipe(
      tap(()=>{}),
      catchError(err =>{
        return this.handleError(err);
      })
    )
    return obServable;
  }
  handleError(err) {
    return err;
  }
}
