import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = 'https://6xnxh4bo1k.execute-api.us-east-2.amazonaws.com/staging/users/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(BASE_URL);
  }
}
