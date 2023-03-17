import { Functions } from 'src/shared/const/functions.dev';
import { Env } from 'environment/env.dev';

const apiEndpoint = Env.apiEndPoint
export  const Apis = {
  MemberList : generatePath(Functions.memberList),
  ProjectList : generatePath(Functions.projectList),
}

function generatePath(apiName:string){
  return apiEndpoint + apiName;
}
