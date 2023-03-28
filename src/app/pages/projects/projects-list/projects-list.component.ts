import { Component, Input, OnInit } from '@angular/core';
import { ProjectList } from '../model/project-list.model';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  @Input() project!: ProjectList;
  @Input() index!: number;

  // public style:

  constructor(){}
  ngOnInit(){}

  public controlProjectsList(project:ProjectList){
    
  }
}
