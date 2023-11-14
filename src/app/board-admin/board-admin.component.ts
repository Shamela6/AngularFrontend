import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_service/token-storage.service';
import { Router } from '@angular/router';
import { FlightSearchService } from '../_service/flightsearch.service';
import { UserService } from '../_service/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  form:any={flightId:null,flightName:null,flightSource:null,flightDestination:null,flightDate:null,
    ticketPrice:null,arrivalTime:null,departureTime:null,numOfStops:null,flightType:null,
    seatNumber:null,pnrNumber:null
  }
  result:any;
  content?: string;
  message?:string;
  now: any;

  flightId?:any;
  flightName: any;
  flightSource: any;
  flightDestination: any;
  ticketPrice: any;
  flightDate: any;
  arrivalTime: any;
  departureTime: any;
  stops: any;
  showSection2: boolean= false;
  

  constructor(private userService: UserService,private search:FlightSearchService,private tokenStorageService: TokenStorageService ,private router:Router ) { }

  ngOnInit(): void {
    this.showSection2 = false;
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

    const{departure_location,arrival_location,date}=this.form;
    this.search.GetAllFlights().subscribe(data=>{console.log(data);
    this.result=data;
    console.log(this.result);
    return this.result;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    }
    )
  
  }

  clickFunction():void{
    alert(" Please fill the details!")
    {}
  }

  onSubmitAdd(){
    this.showSection2 = false;
    const arrivalWithSeconds = this.arrivalTime + ':00';
    const departureWithSeconds = this.arrivalTime + ':00';
      const data = {
        flightId: this.flightId,
        arrivalTime: arrivalWithSeconds,
        departureTime: departureWithSeconds,
        flightDate: this.flightDate,
        flightDestination: this.flightDestination,
        flightName: this.flightName,
        flightSource: this.flightSource,
        numOfStops: this.stops,
        ticketPrice: this.ticketPrice,
        flightType:"Domestic"
      };
    this.search.SetAllFlights(data).subscribe(data=>{console.log(data);
    this.result=data;
    console.log(this.result);
    return this.result;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    }
    )
    

  }

  onSubmitUpdate(){
    this.showSection2 = false;

    const arrivalWithSeconds = this.arrivalTime + ':00';
    const departureWithSeconds = this.arrivalTime + ':00';
      const data = {
        flightId: this.flightId,
        arrivalTime: arrivalWithSeconds,
        departureTime: departureWithSeconds,
        flightDate: this.flightDate,
        flightDestination: this.flightDestination,
        flightName: this.flightName,
        flightSource: this.flightSource,
        numOfStops: this.stops,
        ticketPrice: this.ticketPrice,
        flightType:"Domestic"
      };
    this.search.UpdateFlights(data,this.flightId).subscribe(data=>{console.log(data);
    this.result=data;
    console.log(this.result);
    return this.result;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    }
    )
    

  }

  onSubmitDelete(){
    this.showSection2 = false;

    const arrivalWithSeconds = this.arrivalTime + ':00';
    const departureWithSeconds = this.arrivalTime + ':00';
      const data = {
        flightId: this.flightId,
        arrivalTime: arrivalWithSeconds,
        departureTime: departureWithSeconds,
        flightDate: this.flightDate,
        flightDestination: this.flightDestination,
        flightName: this.flightName,
        flightSource: this.flightSource,
        numOfStops: this.stops,
        ticketPrice: this.ticketPrice,
        flightType:"Domestic"
      };
      console.log(data)
    this.search.DeleteFlights(data,this.flightId).subscribe(data=>{console.log(data);
    this.result=data;
    console.log(this.result);
    return this.result;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    }
    )
    
  }

  onSubmitView(){
    const{departure_location,arrival_location,date}=this.form;
    this.search.GetAllFlights().subscribe(data=>{console.log(data);
    this.result=data;
    console.log(this.result);
    // setTimeout(() => {
    //   // Assuming the form is successfully submitted
    //   //this.showSection1 = false;
    this.showSection2 = true;
    // }, 1000);
    return this.result;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    }
    )

  }

  reloadPage(): void {
    window.location.reload();
  }

}
