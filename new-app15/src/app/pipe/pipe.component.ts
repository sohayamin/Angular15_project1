import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  public ChannelName = "Learning never ends";
  public ChannelName1 = 100;
  public data = 2;
  // obj: any = {}
  myDate = new Date();

  obj:any = {
    name: "soha",
    age: 20
  }

}
