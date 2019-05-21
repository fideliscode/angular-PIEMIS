import { Component } from '@angular/core';
import {InternshipService} from './internship.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	position = 'center';
	constructor(public internshipService: InternshipService){
		
		this.position='center';
	}
  title = 'Unintern';
  
  getposition(e:number){
  	if (e >1){
  		this.position ="left";
  	}else{
  		this.position = "center";
  	}
  }
}
