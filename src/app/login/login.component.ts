import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_service/token-storage.service';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/user';
import { delay } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new User ("","");
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string="USER";
 
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router ) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {

    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.log(data+" "+this.form.userName+" "+this.form.password)
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        //this.reloadPage();
        this.router.navigate(['/sortflights'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );

    //const { username, email, password } = this.form;
    //this.authService.register(username, email, password).subscribe(
    //   const { User } = this.form;
    //   this.authService.register(User).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //    this.router.navigate(['/login'])
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
    
  }
}