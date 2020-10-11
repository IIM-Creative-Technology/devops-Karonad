import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = [{name}]

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.dataService.getAll().subscribe((response) => {
      console.log(response)
      this.data = response;
    })
  }
}
