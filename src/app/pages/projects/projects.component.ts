import { Component, OnInit } from '@angular/core';
import { ProjectManagerService } from './service/project-manager.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  public projectList: any;

  constructor(private  ProjectManagerService:ProjectManagerService){
    this.ProjectManagerService.getProjectsList().subscribe((result)=>{
      this.projectList = result.content;
    })
  }

  ngOnInit(){
  }
}

