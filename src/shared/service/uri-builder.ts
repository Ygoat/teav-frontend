import { Functions } from 'src/shared/const/functions.dev';
import { Env } from 'environment/env.dev';

const apiEndpoint = Env.apiEndPoint
export  const Apis = {
  MemberList : uriBuilder(Functions.memberList),
  ProjectList : uriBuilder(Functions.projectList),
}

function uriBuilder(apiName:string){
  return apiEndpoint + apiName;
}
