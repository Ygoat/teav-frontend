import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; //api接続時に使用
import { catchError, retry } from 'rxjs/operators'; //api接続時に使用
import memberList from '@apiJsons/members-list.json';

@Injectable({
  providedIn: 'root'
})
export class MemberManagerService {
  private baseurl:string = 'http://localhost:4200'
  // public res:Member;
  constructor(private http:HttpClient){}
  public getMemberName(){
    return this.http.get(this.baseurl+'/assets/api/members-list.json')

    // if(typeof memberID === 'number'){
    //   console.log(memberList.content[memberID])
    //   console.log(req)
    // }
    // if(typeof memberID === null){
    //   console.log(memberList.content)
    // }
  }
}


