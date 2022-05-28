import { Component, Inject, Injector, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import { UserAccountService } from '../services/user-account.service';

@Component({
  selector: 'app-manage-customer-accounts',
  templateUrl: './manage-customer-accounts.component.html',
  styleUrls: ['./manage-customer-accounts.component.css']
})
export class ManageCustomerAccountsComponent implements OnInit {
  users: any;
  errMessage: string="";

  user:User = new User();
  constructor(private _service: UserAccountService, @Inject(Injector) private injector: Injector) { }
  private get _toast(): ToastrService {
    return this.injector.get(ToastrService);
  }

  ngOnInit(): void {
    this._service.getUserList().subscribe({
      next: data =>this.users = data,
      error: err => this.errMessage = err
    })
  }
 
  getUsers(){
    this._service.getUserList().subscribe({
      next:data=>this.users=data,
      error:err=>this.errMessage=err
    })
  }

  edit(data:User){
    console.log(data);
    this.user=data;
  }
  onReset(form?:NgForm){
    if(form)
      form.reset();
    this.user=new User();
  }

  delete(id:any){
    if(confirm("Are you sure you want to delete this products?")==true){
      this._service.deleteUser(id).subscribe(res=>{
        let resData=JSON.parse(JSON.stringify(res));
        if(resData.message==="Success"){
          this._toast.warning("Deleted successfully!","Delete");
          // this.onReset(form);
          this.getUsers();
        }else{
          alert(resData.message);
        }
      });
    }
    
  }
}
