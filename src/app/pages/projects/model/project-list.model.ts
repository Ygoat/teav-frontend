export interface APIProjectsList {
  status:number;
  content:ProjectList[];
}

export interface ProjectList{
  id:number,
  projectName:string,
  representative:string,
  recruitMentFlag:number,
  projectOverview:string,
  numberOfParticipants:number,
  projectType:string,
  projectStatus:string,
  tag:string[]
}
