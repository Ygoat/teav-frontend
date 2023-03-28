import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIMembersList } from '../model/member-list.model';
import { Apis } from 'src/shared/service/uri-builder';
import { Observable, throwError } from 'rxjs'; //非同期処理で使用
import { catchError, retry } from 'rxjs/operators'; //非同期処理で使用

@Injectable({
  providedIn: 'root'
})
export class MemberManagerService {
  constructor(private http:HttpClient){}
  public getMemberName(){
    return this.http.get<APIMembersList>(Apis.MemberList)
  }
}


