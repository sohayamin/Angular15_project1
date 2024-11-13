import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messageParent: string = 'Please learn angular.';
  dataParent:string = '';

 ngOnInit() {

 }

 recieveData(data: string) {
    this.dataParent = data;
 }

}
