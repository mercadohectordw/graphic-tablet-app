import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  loginUser: FormGroup;
  errorMessage = "";

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.loginUser = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void{
    if(!this.loginUser.invalid){

      let datosUsuario = {
        email : this.loginUser.get("email")?.value,
        password : this.loginUser.get("password")?.value
      }
      
      this.userService.login(datosUsuario).subscribe((res:any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
      }, (err) => {
        this.errorMessage = "Los datos no son validos";
      });

    } else {
      this.errorMessage = "Complete los datos";
    }
  }

}
