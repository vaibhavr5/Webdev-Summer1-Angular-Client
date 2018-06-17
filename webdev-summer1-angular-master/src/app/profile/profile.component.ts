import { Component, OnInit } from '@angular/core';
import {User} from "../models/user.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user = {};
  username;
  _id;
  password;
  sections = [];

  update(user) {
    console.log("In profile component"+user._id);
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  whiteboard()
  {
      this.router.navigate(['/home',this._id]);
  }

  setUser(user)
  {
    this.username=user.username;
    this._id = user._id;
  }
  ngOnInit() {
    this.service
      .profile()
      .then(user => this.setUser(user));
        //this.username = user.username);

    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections );

  }

}
