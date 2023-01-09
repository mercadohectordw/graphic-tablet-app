import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent implements OnInit {

  registerUser: FormGroup;
  errorMessage = "";

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
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
      
      //subida de datos a la api ...
      let datosUsuario = {
        first_name : this.registerUser.get("first_name")?.value,
        last_name : this.registerUser.get("last_name")?.value,
        email : this.registerUser.get("email")?.value,
        password : this.registerUser.get("password")?.value,
      };

      this.userService.register(datosUsuario).subscribe((mess) => {
        this.errorMessage = mess;
        if(mess == "Usuario Registrado"){
          console.log("Usuario Registrado del BACKEND")
        }
      }, (err) => {
        this.errorMessage = err.error;
      });
    } else {
      this.errorMessage = "Revise su formulario de registro";
    }
  }
}
