import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

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
    userName:[''],
    password:['']
  });

  constructor(private fb: FormBuilder, private router: Router) {

  }

  onResgister() {
    
    let userName = this.signUpForm.value.userName || '';
    let password = this.signUpForm.value.password || '';

    if (userName !== '' && password !== ''){

    if (localStorage.getItem(userName.toLowerCase().trim())) {
      alert('ya existe el usuario');
      return;
    }

    localStorage.setItem(userName.toLowerCase().trim(), password);
    this.router.navigateByUrl('/home');
  }
  else{
    alert('ingrese todos los datos ');
  }
  }

}
