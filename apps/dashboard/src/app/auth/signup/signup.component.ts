import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @Input() signupGroup: FormGroup;
  @Output() signedUp = new EventEmitter();
  @Output() confirmed = new EventEmitter();

  signup(group) {
    this.signedUp.emit(group);
    this.signupGroup.reset();
  }

  confirm(group) {
    this.confirmed.emit(group);
    this.signupGroup.reset();
  }
}
