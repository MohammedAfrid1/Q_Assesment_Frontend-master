import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username1: any;
  userdisplayname:any;
  constructor(private router:Router) { }
  
  ngOnInit(): void {
    if(!localStorage.getItem('username')){
      this.router.navigate(['/login']);
  }
  else
  {
    this.username1=localStorage.getItem('username');
  }
  //this.userdisplayname = sessionStorage.getItem('username');
  
  }
  Logout()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
    
  }
}
