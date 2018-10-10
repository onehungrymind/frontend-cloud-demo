import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() loginGroup: FormGroup;
  @Output() loggedIn = new EventEmitter();

  login(group) {
    this.loggedIn.emit(group);
    this.loginGroup.reset();
  }
}
