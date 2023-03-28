import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apis } from 'src/shared/service/uri-builder';
import { APIProjectsList } from '../model/project-list.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  constructor(private http:HttpClient){}
  public getProjectsList(){
    return this.http.get<APIProjectsList>(Apis.ProjectList)
  }
}
