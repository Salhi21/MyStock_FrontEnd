import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpResponse } from '@angular/common/http';
import { ApiResponse } from 'src/app/models/api-response';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private UserService : UserService,private router: Router) { }

  ngOnInit(): void {}
  onLoginButtonClicked(email: string, password: string) {
    this.UserService.login(email, password).subscribe((res: ApiResponse) => {
      if (res.statusCode === 200) {
        // we have logged in successfully
        this.router.navigate(['/home']);
      }
            console.log(res);


    });
  }


}
