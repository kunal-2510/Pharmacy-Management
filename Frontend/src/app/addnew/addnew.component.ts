import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { Model } from './addnew.model';
@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})

export class AddnewComponent implements OnInit {

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
    this.api.getMed()
    .subscribe(res=>{
      console.log(res)
      this.data = res;
    })
  }


  postMedDetail(){
    this.modelobj.Id=this.formValue.value.Id;
    this.modelobj.Name=this.formValue.value.Name;
    this.modelobj.Type=this.formValue.value.Type;
    this.modelobj.Cost=this.formValue.value.Cost;
    this.modelobj.Expiry=this.formValue.value.Expiry;
   if(this.modelobj.Id>0 && this.modelobj.Name.length>0 && this.modelobj.Type.length>0 && this.modelobj.Cost.length>0 && this.modelobj.Expiry.length>0) {
    console.log(this.modelobj)
   this.api.postMed(this.modelobj)
   .subscribe(res=>{
     console.log(res);
     alert("Medicine Added Successfully")
  
      window.location.reload();
   }
   )
   }
     
  }

}
