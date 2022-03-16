import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  postdata: any;
 
res: any| undefined;
  result: any;
 
  constructor(private myservice:PostService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(l:any)
  {
    //alert("Alert");
    this.postdata = l;
    this.myservice.Login(l).
    subscribe(res=>
      {
       this.result=res
       if(this.result!=null)
      {
       alert(this.result)
           localStorage.setItem('username',this.result.Userdata[0].Name);
            alert(this.result)
            this.router.navigate(['dashboard']);                                                      
      }
      else{
        alert("Please Enter Valid Inputs")
      }
      });
    }
    onclick()
    {

    }
}
