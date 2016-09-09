import { Component } from '@angular/core';
import '../css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
	birthday = new Date(2016, 9, 15);
}
