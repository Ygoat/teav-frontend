import { Component } from '@angular/core';
import { MemberManagerService  } from 'src/app/pages/members/service/member-manager.service';
import { APIMmebersList, MembersList } from './model/member-list.model'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  providers: [MemberManagerService]
})
export class MembersComponent {
  public members!:MembersList[];
  constructor(private _MemberManagerService:MemberManagerService){
    this._MemberManagerService.getMemberName().subscribe((response) => {
      this.members = response.content;
      console.log(this.members[0].id) //コンソールにテスト出力
    })
  }
}