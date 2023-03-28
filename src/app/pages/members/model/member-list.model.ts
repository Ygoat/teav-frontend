export interface APIMembersList {
  status:number;
  content:MembersList[];
}

export interface MembersList{
  id:number; 
  name:string;
  comeFrom:string;
  introduction:string;
  follow:number;
  follower:number;
}
