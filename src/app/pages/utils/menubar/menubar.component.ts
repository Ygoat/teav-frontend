import { Component } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
  showUserPullDown:boolean;
  constructor(){
    this.showUserPullDown=false;
  }
}
