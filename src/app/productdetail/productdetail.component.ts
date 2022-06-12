import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { elementAt, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent implements OnInit {
 id:any
 product:any
  constructor(
private route:ActivatedRoute,
private http:HttpClient

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));

    this.http.get<any>('https://localhost:44395/api/Product/ProductDetail?id='+this.id).subscribe((response:any)=>{
      console.log(response)
      this.product=response
   }
   )
  }

}
