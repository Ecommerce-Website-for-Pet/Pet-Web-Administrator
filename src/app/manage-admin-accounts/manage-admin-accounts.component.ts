import { AdminAccountService } from './../services/admin-account.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Admin } from '../models/admin';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-admin-accounts',
  templateUrl: './manage-admin-accounts.component.html',
  styleUrls: ['./manage-admin-accounts.component.css']
})
export class ManageAdminAccountsComponent implements OnInit {
  admins: any;
  errMessage: string="";
  admin:Admin = new Admin();
  constructor(private _service: AdminAccountService, private _toast:ToastrService) { }

  

  ngOnInit(): void {
    this._service.getAdminList().subscribe({
      next: data =>this.admins = data,
      error: err => this.errMessage = err
    })
  }

  submitData(form:NgForm){
    // console.log("Form data: ",form.value);
     console.log("Model: ",this.admin);
    if(this.admin._id==''){
      this._service.postAdmin(this.admin).subscribe(res => {
        // console.log("Res: ",res);
        let resData = JSON.parse(JSON.stringify(res));
        if(resData.message === "success"){
        //  alert("Success!"); 
        this._toast.success("Inserted successfully!", "Insert");
         this.getadmins();
         this.onReset();
        }else{
          alert("Fail!");
        }
      })
    }else{
      this._service.updateAdmin(this.admin._id, this.admin).subscribe(res => {
        let resData = JSON.parse(JSON.stringify(res));
        if(resData.message === "success"){
        //  alert("Update successfully!");
         this._toast.info("Update Successfully!", "Update");
         this.onReset();
         this.getadmins(); 
        }else{
          alert("Fail!");
        }
      })
    }
    
  }
  edit(data:Admin){
    console.log(data);
    this.admin=data;
  }
  delete(id:any,form:NgForm){
    if(confirm(`Are you sure you want to delete this admins?`)==true){
      this._service.deleteAdmin(id).subscribe(res=>{
        let resData=JSON.parse(JSON.stringify(res));
        if(resData.message==="success"){
          // alert("Deleted Successfully!");
          this._toast.warning("Deleted Successfully!", "Delete",{
            timeOut:5000,
            progressBar:false
          });
          this.onReset(form);
          this.getadmins();
        }else{
          alert(resData.message);
        }
      });
    }
    
  }
  onReset(form?:NgForm){
    if(form)
      form.reset();
    this.admin=new Admin();
  }
  getadmins(){
    this._service.getAdminList().subscribe({
      next:data=>this.admins=data,
      error:err=>this.errMessage=err
    })
  }
// submit(): void{
//   this.regForm.patchValue({
//     stt: 1,
//     pName: "Heneiken",
//     pPrice: 19000
//   })

// public regForm: FormGroup = new FormGroup({
//   stt: new FormControl('1'),
//   pName: new FormControl('khanhchieu')
// })
}
