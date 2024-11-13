import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent {

  displayName: string = '';
  variable: number = 0
  display: boolean = true;
  pizza: string = 'Cheese';

  getName(value:string) {
      this.displayName = value;
  }

  getHeading(value:string) {
    this.displayName = value;
  }

  getFullName(v1:string, v2:string) {
    this.displayName = v1 + v2;
  }

  getCounter(str:string) {
    str == 'add' ? this.variable++ : this.variable--
  }

}
