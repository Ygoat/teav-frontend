import { Component } from '@angular/core';
import { MemberManagerService  } from 'src/app/pages/members/service/member-manager.service';
import { APIMembersList, MembersList } from './model/member-list.model'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  providers: [MemberManagerService]
})
export class MembersComponent {
  result:any
  constructor(private MemberManagerService:MemberManagerService){
    this.MemberManagerService.getMemberName().subscribe((result) => {
      this.result = result.content;
      console.log(this.result[0].name) //コンソールにテスト出力
    })
  }
}