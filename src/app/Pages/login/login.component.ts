import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;

  constructor(
    private http: HttpService,
    private route: Router
  ) {

  }

  login() {
    if (this.email && this.password) {
      this.route.navigate(['dashboard']);
    }
    // this.http.login(this.email, this.password).subscribe(
    //   (response: any) => {
    //     this.route.navigate(['dashboard']);
    //   },
    //   error => {
    //     alert('Please check username and password')
    //     console.error('Login failed:', error);
    //   }
    // );
  }

}

// github repository RouterLink
// snapshots of PromiseRejectionEvent
// ppt
