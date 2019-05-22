import {Injectable} from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';

import {tap,catchError} from 'rxjs/operators';
import { Observable} from 'rxjs';
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
  public Get(uri: string, paramsOptions ? : Object):Observable<any> {
    paramsOptions = Object.assign(httpOptions, {
      params: paramsOptions
    });
    let obServable = this.http.get(urlApi + '/' + uri, paramsOptions).pipe(
      tap(() => {}),
      catchError((err) => {
        return this.handleError(err)
      })
    )
    return obServable;
  }
  //POST
  public Post(uri:string,data?: object,paramsOptions ?:Object):Observable<any>{
    paramsOptions = Object.assign(httpOptions, {
      params: paramsOptions
    });
    let obServable = this.http.post(urlApi + '/' + uri,data, paramsOptions).pipe(
      tap(() => {}),
      catchError((err) => {
        return this.handleError(err)
      })
    )
    return obServable;
  }
  //DELETE
  public Delete(uri:string):Observable<any>{
    let obServable = this.http.delete(urlApi + '/' + uri).pipe(
      tap(()=>{}),
      catchError((err) =>{
        return this.handleError(err);
      })
    )
    return obServable;
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
