import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  signUpForm = this.fb.group({
    email: [''],
    userName:['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    password:['', [Validators.required]],
    rePassword: ['']
  });

  constructor(private fb: FormBuilder, private router: Router, private userService:UserService) {

  }

  onResgister() {
    let userName = this.signUpForm.value.userName || '';
    let email = this.signUpForm.value.email || '';
    let password = this.signUpForm.value.password || '';
    let rePassword = this.signUpForm.value.rePassword || '';
    if (rePassword !== password) {
      Swal.fire({
        text:'Las constraseñas no coinciden',
        icon:'error'
      })
      return;
    }


    let response = this.userService.register({userName, password, email})
    if(response.success){
      this.router.navigateByUrl('/home');
    }else{
      Swal.fire({
        text:response.message,
        icon:'error'
      })
    }

  }

}
