import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Model } from '../addnew/addnew.model' ;
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  formValue !: FormGroup;
  modelobj:Model=new Model();
  constructor(private formbuilder: FormBuilder,
private api:ApiService) { }

    
        data:any;

  ngOnInit(): void {
    this.data = this.getData();
    this.formValue=this.formbuilder.group({
      Id:[''],
      Name:[''],
      Type:[''],
      Cost:[''],
      Expiry:['']
    })
  
  }
  getData(){
    // window.location.reload();
    this.api.getMed()
    .subscribe(res=>{
      console.log(res)
      this.data = res;
    })
  }

deletemed(row: any){
  console.log(row,row.id);
   this.api.deleteMed(row.id)
   .subscribe(res=>{
     alert("Medicine Deleted")
     window.location.reload();
  })
}
onedit(row:any){
  this.modelobj.id=row.id;
  this.formValue.controls['Id'].setValue(row.Id);
  this.formValue.controls['Name'].setValue(row.Name);
  this.formValue.controls['Type'].setValue(row.Type);
  this.formValue.controls['Cost'].setValue(row.Cost);
  this.formValue.controls['Expiry'].setValue(row.Expiry);
}
updateMedDetail(){
 
  this.modelobj.Id=this.formValue.value.Id;
  this.modelobj.Name=this.formValue.value.Name;
  this.modelobj.Type=this.formValue.value.Type;
  this.modelobj.Cost=this.formValue.value.Cost;
  this.modelobj.Expiry=this.formValue.value.Expiry;
  this.api.updateMed(this.modelobj,this.modelobj.id)
  .subscribe(res=>{
    alert("Updated Successfully");
    window.location.reload();
  })
}
}
