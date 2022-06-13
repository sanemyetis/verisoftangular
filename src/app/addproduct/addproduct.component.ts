import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      name: ['',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$'),
      ])
    ],
      code: ['',Validators.required],
      description: ['',Validators.required],
      price: ['',Validators.compose([
        Validators.required,
        Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
      ])],
    });
  }

  ngOnInit(): void {
  }


  submitForm() {
    if(this.form.valid)
    {
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
  else{
    window.alert('Form Invalid')
  }
}
}
