import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stuff: string;
  constructor( httpClient: HttpClient) {
    httpClient.get('http://localhost:8080/api/v1/Spell/user').subscribe( stuff => this.stuff = stuff.toString())
    console.log(this.stuff);
   }

  ngOnInit() {
  }

}
