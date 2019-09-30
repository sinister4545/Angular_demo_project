import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  description:string ='';
  name:string='';
  titleAlert:string='there is some problem';
  rForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null,Validators.required],
      'description': [null,Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(400)])],
      'validate' : ''
    });
   }

   addpost(post){
     this.description=post.description;
     this.name=post.name;
   }
   
   onSubmit(){
     console.log("is this working??")
     if(this.rForm.invalid){
      console.log("working??")
      return;
     }
     console.log("yes working")
   }

  ngOnInit() {
  }
}
