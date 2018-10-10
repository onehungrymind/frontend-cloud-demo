import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '@workspace/common-data';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private auth: AuthService) { }

  logout() {
    this.auth.logout();
  }
}
