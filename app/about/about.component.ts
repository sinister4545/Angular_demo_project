import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  employee:Object;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getEmployes().subscribe( data => {
      this.employee=data
      console.log(this.employee)
    })
  }

}
