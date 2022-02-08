import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { pipe } from 'rxjs/internal/util/pipe';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
postMed(data :any){
  return this.http.post<any>("http://localhost:3000/posts",data)
.pipe(map((res:any)=>{
  return res;
}))
}
getMed(){
  return this.http.get<any>("http://localhost:3000/posts")
.pipe(map((res:any)=>{
  return res;
}))
}

updateMed(data :any,id:number){
  return this.http.put<any>("http://localhost:3000/posts/"+id,data)
.pipe(map((res:any)=>{
  return res;
}))
}
deleteMed(id:number){
  return this.http.delete<any>("http://localhost:3000/posts/"+id)
.pipe(map((res:any)=>{
  return res;
}))
}
getUserData(){
  return this.http.get("http://localhost:3000/posts")
}

}
