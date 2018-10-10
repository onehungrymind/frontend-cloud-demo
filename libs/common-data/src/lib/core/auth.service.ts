import { Injectable } from '@angular/core';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool
} from 'amazon-cognito-identity-js';
import { poolId, clientId } from 'keys/congito';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
  poolData = {
    UserPoolId: poolId,
    ClientId: clientId
  };
  userPool = new CognitoUserPool(this.poolData);

  constructor(
    private router: Router
  ) { }

  signup(user: string, password: string, email: string) {
    const emailData = {
      Name: 'email',
      Value: email
    };

    const emailAtt = [new CognitoUserAttribute(emailData)];

    this.userPool.signUp(user, password, emailAtt, null, ((err, res) => {
      if (err) {
        console.log('There was an error', err);
      } else {
        console.log('You have successfully signed up, please confirm your email.');
      };
    }));
  }

  confirm(username: string, code: string) {
    const userData = {
      Username: username,
      Pool: this.userPool
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(code, true, (err, res) => {
      if (err) {
        console.log('There was an error -> ', err);
      } else {
        console.log('You have been confirmed');
      }
    })
  }

  login(username: string, password: string) {
    const authData = {
      Username: username,
      Password: password
    };
    const authDetails = new AuthenticationDetails(authData);
    const userData = {
      Username: username,
      Pool: this.userPool
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (res) => {
        this.router.navigateByUrl('/home')
        console.log('You are now logged in.');
      },
      onFailure: (err) => {
        console.log('There was an error during login, please try again', err);
      }
    })
  }

  logout() {
    this.userPool.getCurrentUser().signOut();
    this.router.navigateByUrl('/auth');
    console.log('You are now logged out');
  }
}
