import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent implements OnInit {

  registerUser: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerUser = this.formBuilder.group({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z0-9]{8,16})$/)]),
      confirm_password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void{
    if(!this.registerUser.invalid && this.registerUser.get('password')?.value === this.registerUser.get('confirm_password')?.value){
      console.log("todo ok");
      
      //subida de datos a la api ...
    
    }
  }
}
