import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  firstClick(){
    return console.log("clicked")
  }
  secondClick(){
    return console.log("second click")
  }
  getUsers(){
    return this.http.get("https://reqres.in/api/users")
  }
  getEmployes(){
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees")
  }
}
