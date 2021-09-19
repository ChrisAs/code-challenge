import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public catIds : any[] = [];

  ngOnInit(): void {
  }


 //Load the Cat JSON from the server
  public showCats() : void {

    this.http.get('https://cataas.com/api/cats').toPromise().then(data  => {

    this.catIds = <Array<any>>data;
    

    });

  }

}
