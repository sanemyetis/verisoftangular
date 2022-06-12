import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  form!: FormGroup;
  id:any
  product:any
   constructor(
  private route:ActivatedRoute,
 private http:HttpClient,
 public fb: FormBuilder,
 private router:Router
 
   ){

    this.form = this.fb.group({
      id:[''],
      name: [''],
      code: [''],
      description: [''],
      price: [''],
    });
    }

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
      
    }
    this.http.get<any>('https://localhost:44395/api/Product/ProductDetail?id='+this.id).subscribe((response:any)=>{
      console.log(response)
      this.product=response
   }
   )
   
  }
  submitForm() {
    var formData: any = new FormData();
    formData.append('name', this.form?.get('name')?.value);
    formData.append('code', this.form?.get('code')?.value);
    formData.append('description', this.form?.get('description')?.value);
    formData.append('price', this.form?.get('price')?.value);
    formData.append('id', this.product['id']);
    this.http

      .put('https://localhost:44395/api/Product/UpdateProduct', formData)
      .subscribe({
        next: (response) => setTimeout(() => {
          this.router.navigate(['home'])
            window.alert('Succesfully Updated')
          
        }),
        error: (error) => setTimeout(() => {
          window.alert("Values cannot be null")
         }),
      });
  }




}
