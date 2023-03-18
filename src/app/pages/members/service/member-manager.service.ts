import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIMmebersList } from '../model/member-list.model';
import { Apis } from 'src/shared/service/path-generator';
import { Observable, throwError } from 'rxjs'; //api接続時に使用
import { catchError, retry } from 'rxjs/operators'; //api接続時に使用

@Injectable({
  providedIn: 'root'
})
export class MemberManagerService {
  constructor(private http:HttpClient){}
  public getMemberName(){
    console.log(Apis.MemberList)
    return this.http.get<APIMmebersList>(Apis.MemberList)
  }
}


