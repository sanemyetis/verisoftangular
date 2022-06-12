import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    product:any
  constructor(
    private http:HttpClient,
    private router:Router

  ) { }

  ngOnInit(): void {
    this.http.get('https://localhost:44395/api/Product/AllProducts').subscribe((response:any)=>{
  
      this.product=response
   }
   )
  }
  goDetail(id:any){
    this.router.navigate(['/productdetail/', id]);
  }
  goEdit(id:any){
    this.router.navigate(['/editproduct/', id]);
  }

}
