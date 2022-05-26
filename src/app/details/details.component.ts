import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,private httpClient:HttpClient) { }
  id:any;
  people:any;
  ngOnInit(): void {
    this._activatedRoute.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log(this.id);
      }
    );
    this.httpClient.get<any>('https://reqres.in/api/users/'+this.id).subscribe(
        response =>{
          console.log(response.data);  
          this.people=response.data;       
        }
      );
  }
}
