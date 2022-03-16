import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  users:any;
  selectedArr: string[] = new Array();
  myForm = new FormGroup({})
  addC: any;
  SendUser: any;
  s: any;
  selectedusers: any;
  selectedmails:any;
  u: any;
  AddUser: any;
  cus: any;
   

  constructor(private myservice:PostService, private formBuilder: FormBuilder) { 
    this.myForm = this.formBuilder.group({
     // selectedusers: [''],
      selectedmails:[''],
      mydate: [''],
      mytime:['']
    });
    this.AddUser=new FormGroup(
      {
      Name:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      Email:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      Password:new FormControl('',[Validators.required,Validators.maxLength(15)]),
    //  Enter_Mail:new FormControl('',[Validators.required,Validators.maxLength(15)]),
     

      }
      );
  }

  ngOnInit(): void {

    this.myservice.getUsers().subscribe((response)=>{
      this.users = response;
    });
//this.myservice.history().subscribe((res)=>{this.users=res});

{
  this.myservice.history().subscribe((res)=>{this.u=res});
}
  }

 

  onCheckboxChange(e:any) {
    if (e.target.checked) {
      this.selectedArr.push(e.target.value);

    } else {
      this.selectedArr.forEach((element,index)=>{
        if(element==e.target.value) this.selectedArr.splice(index,1);
     });
    }
    //set value
    this.myForm.controls['selectedmails'].setValue(this.selectedArr.toString());
    
  }

  onSubmit(){
  
    if(this.selectedArr.length!=0)
    {
    this.s= this.myForm.value;
    this.myservice.SendUser(this.s).subscribe((r:any)=>{this.addC=r;})
    this.myservice.StoreUser(this.s).subscribe((r:any)=>{this.addC=r;})
    alert("Invitation sent Successfully...!")
    window.location.reload();
    }
    else
    {
     alert("Plz select Mails");
    }

    //alert(this.myForm.controls['selectedusers'].value);
    //alert(this.myForm.controls['datetime'].value);

  }
  oonSubmit()
  {
   this.cus= this.AddUser.value;
   
    this.myservice.AddUser(this.cus).subscribe((r:any)=>{this.addC=r;});
    alert(" Added Successfully...!")
    window.location.reload();
  }
  get Name()
  {
    return this.AddUser.get('Name');
  }
  get Email()
  {
    return this.AddUser.get('Email');
  }
  get password()
  {
    return this.AddUser.get('Password');
  }
 
}