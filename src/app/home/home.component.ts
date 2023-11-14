import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
///import { FaIconLibrary } from '@fortawesome/angular-fontawesome/icon-library';
import { FlightSearchService } from '../_service/flightsearch.service';
import { TokenStorageService } from '../_service/token-storage.service';
import { UserService } from '../_service/user.service';
import { DatePipe } from "@angular/common";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  message?:string;
  isLoggedIn=false;
  now: any;
  form:any={departure_location:null,
    arrival_location:null,
    date:null
  }
  
    result:any;
    showSection1: boolean = true;
    showSection2: boolean = false;
  
  constructor(private userService: UserService,private search:FlightSearchService,private tokenStorageService: TokenStorageService ,private router:Router ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    const datePipe = new DatePipe('en-Us');
    this.now = datePipe.transform(new Date(), 'yyyy-MM-dd');
  }
  
onSubmit():void{
  const{departure_location,arrival_location,date}=this.form;
  this.search.GetFlights(departure_location,arrival_location,date).subscribe(data=>{console.log(data);
  this.result=data;
  console.log(this.result);
  setTimeout(() => {
    // Assuming the form is successfully submitted
    //this.showSection1 = false;
    this.showSection2 = true;
  }, 1000);
  return this.result;
  },
  err => {
    this.content = JSON.parse(err.error).message;
  }
  )
  
}
clickFunction():void{
  alert(" Please Login To Make Booking!")
  {this.router.navigate(["/login"])}
}
clickFunction2(flight_id:number,date:Date):void{
 {this.router.navigate(["/sortflights"])}
  
  
}


}