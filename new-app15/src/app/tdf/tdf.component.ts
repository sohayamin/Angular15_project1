import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
  newForm!: NgForm;
  formObj: Student = new Student('',0,'');

  save(data: any) {
      
  }

}
