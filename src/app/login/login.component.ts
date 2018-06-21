import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserServiceClient} from "../services/user.service.client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: String;
  username;
  password;
credentials;
user:{};
  login(username, password) {
      this.username=username;
      this.password=password;
      console.log("INPUT USERNAME:"+this.username);
      console.log("INPUT PASSWORD:"+this.password);
      this.service
        .login(username, password)
        .then(user => this.credentials = user)
        .then(() => this.check_login(this.credentials));
      // .then(() => {
      //   this.router.navigate(['profile']);
      // });

  }

  check_login(credentials)
  {

      if(credentials.user=="Invalid User" || this.username==undefined || this.password==undefined)
        this.message="Invalid credentials.. Please try again or Register to continue  ";
      else if(credentials.username=="admin")
        this.router.navigate(['user-admin']);
      else
        this.router.navigate(['profile']);

  }

  constructor(private router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
  }

}
