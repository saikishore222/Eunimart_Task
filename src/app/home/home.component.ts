import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private httpClient:HttpClient,private _router:Router
  ) { }
 
  people:any;
  selected:any;
  ngOnInit(): void {
    this.getData();
    this.selected=true;
  }
  getData()
  {
    console.log("Times");
      this.httpClient.get<any>('https://reqres.in/api/users').subscribe(
        response =>{
          this.people=response.data;       
          console.log(this.people);
        }
      );
  }
  onSelect(index:any)
  {
    this.selected=false;
    this._router.navigate(['/users',index]);
  }
}
