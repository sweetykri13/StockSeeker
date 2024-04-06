import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email!: string;
  password!: string;
  lastName!: string;
  firstName!: string;
  contact!: number;
  confirmPswd!: string;
  constructor(
    private route: Router
  ) {}

  signUp() {
    this.contact = 12124325;
    if (this.email && this.password && this.firstName && this.lastName && this.contact) {
      this.route.navigate(['login']);
    }
    // this.http.register(this.email, this.password).subscribe(
    //   (response: any) => {
    //     this.route.navigate(['login']);
    //   },
    //   error => {
    //     alert('Please fill all fields')
    //     console.error('Login failed:', error);
    //   }
    // );
  }

}
