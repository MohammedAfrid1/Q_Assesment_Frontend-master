import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url="https://localhost:44373/api/webapi";
  constructor(private httpclient:HttpClient) { }
  getUsers()
  {
    return this.httpclient.get(this.url);
  }
  history()
  {
    return this.httpclient.get(this.url+"/History");
  }
  StoreUser(cus:any) {
    const headers = { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
  };
    return this.httpclient.post(this.url+"/Store",cus,{headers});
  }
  SendUser(s:any) {
    const headers = { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
  };
    return this.httpclient.post(this.url+"/Send",s,{headers});
  }
  AddUser(cus:any) {
    const headers = { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
  };
    return this.httpclient.post(this.url+"/AddUser",cus,{headers});
  }
  Login(l:any) {
    const headers = { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': '',
  };
    return this.httpclient.post(this.url+"/Login",l,{headers});
  }
}

