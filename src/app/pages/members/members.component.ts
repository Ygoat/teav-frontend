import { Component } from '@angular/core';
import { MemberManagerService  } from 'src/app/service/member-manager.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  providers: [MemberManagerService]
})
export class MembersComponent {
  public members:any;
  constructor(private _MemberManagerService:MemberManagerService){
    this._MemberManagerService.getMemberName().subscribe((members) => {
      console.log(members);
      this.members = members;
    })
  }
}