import { Component } from '@angular/core';
import { TokenStorageService } from '../_service/token-storage.service';
import { AuthService } from '../_service/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/user';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  form = new User ("","");
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string="ADMIN";
 
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router ) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(): void {

    this.authService.adminlogin(this.form).subscribe(
      data => {
        if(this.form!=null){
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log(this.roles)
        alert("Welcome Admin")
        //this.roles = this.tokenStorage.getUser().roles;
        //this.reloadPage();
        this.router.navigate(['/dashboard'])
        }
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
  reloadPage(): void {
    window.location.reload();
  }
}