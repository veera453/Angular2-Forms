import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	//myName= "Anji Reddy";
  onSubmit(value: any){
  	console.log(value);
  }
}
