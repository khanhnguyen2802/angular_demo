import { Component } from '@angular/core';
import {UserServiceService} from "./service/user-service.service";
import { setData } from './global-contanst';
import {Authen} from "./model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wiki-staff';
  // token: Authen | undefined;

  constructor(private userService: UserServiceService) {
    // this.userService.login().subscribe(response => {
    //   console.log(response);
    //   this.token = response;
    //   setData(this.token);
    //   console.log(this.token);
    // });
  }
}
