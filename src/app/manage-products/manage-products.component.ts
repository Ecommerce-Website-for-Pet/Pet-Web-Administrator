import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { UploadPDService } from '../services/uploadPD.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
 url:String ="http://localhost:3000/"
//   file:any = null;
// 	products:any;
// public formUpload = this._formBuilder.group({
// 	name:['',Validators.compose([Validators.required,Validators.minLength(3)])],
// 	//name:['',[Validators.required,Validators.minLength(3)]],
// 	file:['']
// })
//   constructor(private _formBuilder: FormBuilder, private _service: ExampleService, private _router: Router) { }

  products: any;
  errMessage: string="";
  product:Product = new Product();
  file:any = null;
  public formUpload = this._formBuilder.group({
    name:['',Validators.compose([Validators.required,Validators.minLength(3)])],
    //name:['',[Validators.required,Validators.minLength(3)]],
    file:['']
  })
  constructor(private _formBuilder: FormBuilder, private _service: UploadPDService, private _toast:ToastrService) { }

  ngOnInit(): void {
	// //   this._service.getAllProducts().subscribe({
	// // 		  next: data=>this.products=data,
	// // 		  error: error=>console.log(error)
	// // 	  })
	 this.getData();
  // this._service.getPDList().subscribe({
  //   next: data =>this.products = data,
  //   error: err => this.errMessage = err
  // })
  }
  

  onChange(event:any){
    if(event.target.files.length>0){
      this.file=event.target.files[0];
      /* console.log("File info: ",event.target.files[0]) */
    }else{
      this.file=null;
    }
  }
  getData(){
	    this._service.getAllProducts().subscribe({
			  next: data=>this.products=data,
			  error: error=>console.log(error)
		  })
  }
//   onChange(event:any){
// 	if(event.target.files.length>0){
// 		this.file=event.target.files[0];
// 		/* console.log("File info: ",event.target.files[0]) */
// 	}else{
// 		this.file=null;
// 	}
// }
//   onSubmit(data:any){
// 	/* console.log("Data:",data); */
// 	let formData=new FormData();
// 	formData.append("name",data.name);
// 	formData.append("file",this.file);
// 	// console.log("FormData:",formData);
// 	// for(let pair of formData.entries()){
// 	// 	//cấu hình entries trong tsconfig.json
// 	// 	console.log(pair[0],pair[1]);
// 	// }

// 	//Send data to server
// 	this._service.uploadData(formData).subscribe({
// 		next: res=>{
// 			console.log(res);
// 			this.getData();
// 		},
// 		error:err=>{
// 			console.log(err.message);
// 		}
// 	})


// }
// onSelect(id:any){
// 	this._router.navigate(['/details',id])
// }
//   get nameInput(){
// 	return this.formUpload.controls['name'];
// }

onSubmit(data:any){
  console.log("Data:",data); 
	let formData=new FormData();
  if(this.product._id==''){
     formData.append("name",data.name);
     formData.append("file", this.file)
     formData.append("category",data.category);
     console.log("FormData:",formData);
     this._service.uploadData(formData).subscribe({
      next: res=>{
        console.log(res);
        this.getData();
      },
      error:err=>{
        console.log(err.message);
      }
    })
  }else{
    this._service.updateProduct(this.product._id, this.product).subscribe(res => {
      let resData = JSON.parse(JSON.stringify(res));
      if(resData.message === "Success"){
        this._toast.success("Updated successfully!","Updated");
       this.onReset();
       this.getData(); 
      }else{
        alert("Fail!");
      }
    })
  }

	// for(let pair of formData.entries()){
	// 	//cấu hình entries trong tsconfig.json
	// 	console.log(pair[0],pair[1]);
	// }

	//Send data to server
	

}
onReset(form?:NgForm){
  if(form)
    form.reset();
  this.product=new Product();
}
delete(id:any){
  if(confirm("Are you sure you want to delete this products?")==true){
    this._service.deleteProduct(id).subscribe(res=>{
      let resData=JSON.parse(JSON.stringify(res));
     
      if(resData.message==="Success"){
        this._toast.warning("Deleted successfully!","Deleted");
        this.getData();
      }else{
        alert(resData.message);
      }
    });
  }
  
}

edit(data:Product){
  console.log(data);
  this.product=data;
}
get nameInput(){
	return this.formUpload.controls['name'];
}
}
