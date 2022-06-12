import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

 
 
 form!: FormGroup;

  constructor(
    public fb: FormBuilder, private http: HttpClient,private route:Router

  ) { 

    this.form = this.fb.group({
      name: [''],
      code: [''],
      description: [''],
      price: [''],
    });
  }

  ngOnInit(): void {
  }
  submitForm() {
    var formData: any = new FormData();
    formData.append('name', this.form?.get('name')?.value);
    formData.append('code', this.form?.get('code')?.value);
    formData.append('description', this.form?.get('description')?.value);
    formData.append('price', this.form?.get('price')?.value);

    this.http
      .post('https://localhost:44395/api/Product/AddProduct', formData)
      .subscribe({
        next: (response) => setTimeout(() => {
          this.route.navigate(['home'])
            window.alert('Succesfully Added')
          
        }),
        error: (error) => setTimeout(() => {
         window.alert("Values can not be null")
        })
      });
  }
}
