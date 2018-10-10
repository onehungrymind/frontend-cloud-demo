import { Component, OnInit } from '@angular/core';
import { AuthService } from '@workspace/common-data';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  form: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  login(userInfo) {
    this.auth.login(userInfo.username, userInfo.password);
  }

  signup(userInfo) {
    this.auth.signup(userInfo.username, userInfo.password, userInfo.email);
  }

  confirmation(confirmInfo) {
    this.auth.confirm(confirmInfo.username, confirmInfo.code);
  }

  initForm() {
    this.form = this.formBuilder.group({
      username: [''],
      password: [''],
      email: [''],
      code: ['']
    })
  }

}
