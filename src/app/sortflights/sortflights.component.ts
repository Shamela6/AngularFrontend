import { Component } from '@angular/core';
import { UserService } from '../_service/user.service';
import { FlightSearchService } from '../_service/flightsearch.service';
import { DatePipe } from '@angular/common';
import { TokenStorageService } from '../_service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sortflights',
  templateUrl: './sortflights.component.html',
  styleUrls: ['./sortflights.component.css']
})
export class SortflightsComponent {

  content?: string;
  message?:string;
  isLoggedIn=false;
  now: any;
  form:any={price:null,departure_location:null,
    arrival_location:null,departure_time:null,
    arrival_time:null, stops:null,flight_type:null,
    date:null
  }
  stop:number | undefined
  selectedValue: string = '';

  flightId?:any=null;
  flightName: any=null;
  flightSource: any=null;
  flightDestination: any=null;
  ticketPrice: any=null;
  flightDate: any=null;
  arrivalTime: any=null;
  departureTime: any=null;
  stops: any=null;
  flightType: any=null;
  
    result:any;
    showSection2: boolean = true;
  
  
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

    const{departure_location,arrival_location,date}=this.form;
    this.search.GetAllFlights().subscribe(data=>{console.log(data);
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

onSubmit(){
  console.log("yes")
  const{price,departure_time,arrival_time, stops,flight_type}=this.form;
  const selectElement = document.getElementById('stops') as HTMLSelectElement;
  const selectedValue = selectElement.value;

  const selectAElement = document.getElementById('arrivalTime') as HTMLSelectElement;
  const selectedAValue = selectAElement.value;
  const arrivalWithSeconds = selectedAValue + ':00';

  const selectDElement = document.getElementById('departureTime') as HTMLSelectElement;
  const selectedDValue = selectDElement.value;  
  const departureWithSeconds = selectedDValue + ':00';

    const data = {
      flightId: this.flightId,
      arrivalTime: arrivalWithSeconds,
      departureTime: departureWithSeconds,
      flightDate: this.flightDate,
      flightDestination: this.flightDestination,
      flightName: this.flightName,
      flightSource: this.flightSource,
      numOfStops: this.selectedValue,
      ticketPrice: this.ticketPrice,
      flightType:this.flightType
    };

    this.search.GetAllFlightsSort(data.ticketPrice,data.departureTime,data.arrivalTime,data.numOfStops,data.flightType).subscribe(data=>{console.log(data);
      this.result=data;
      console.log(this.result);
      return this.result;
    },
     err => {
        this.content = JSON.parse(err.error).message;
      }
    )
  
  // if(this.selectedValue==="non-stop")
  //   this.stop=0
  // else if (this.selectedValue==="Single-stop")
  //   this.stop=1
  // else
  //   this.stop=2

    // if(price!=null && departure_time==null && arrival_time==null
    // && this.stop==null && flight_type==null)
    // this.sortByPrice()

    // else if(price==null && departure_time!=null && arrival_time==null
    // && this.stop==null && flight_type==null)
    // this.sortBydtime()

    // else if(price==null && departure_time==null && arrival_time!=null
    //   && this.stop==null && flight_type==null)
    //   this.sortByatime()

  //   else if(price==null && departure_time==null && arrival_time==null
  //     && this.stop!=null && flight_type==null){
  //       if(this.selectedValue==="All"){
  //         console.log(stops)
  //         this.search.GetAllFlightsSort(price,departure_time,arrival_time,this.stop,flight_type).subscribe(data=>{console.log(data);
  //           this.result=data;
  //           console.log("hgh"+this.result);
  //           return this.result;
  //           },
  //           err => {
  //             this.content = JSON.parse(err.error).message;
  //           }
  //           )
  //       }
  //     else if(stops==="non-stop")
  //         this.stop=0
  //     else if (stops==="Single-stop")
  //       this.stop=1
  //     else
  //       this.stop=2

  //     this.sortByStops()
  //     }
        

  //   else if(price==null && departure_time==null && arrival_time==null
  //     && this.stop!=null && flight_type!=null)
  //      this.sortByType()

  //     else if(price!=null && departure_time!=null && arrival_time!=null
  //       && this.stop!=null && flight_type!=null)
  //       this.sortByAll()
    
}
sortByAll(){
  console.log("All")
  // const{price,departure_time,arrival_time, stops,flight_type}=this.form;
  // this.search.GetAllFlightsSort(price,departure_time,arrival_time,this.stop,flight_type).subscribe(data=>{console.log(data);
  //   this.result=data;
  //   console.log("tttt"+this.result);
  //   return this.result;
  //   },
  //   err => {
  //     this.content = JSON.parse(err.error).message;
  //   }
  //   )

}

sortByStops(){
  console.log("aa")
  const{stops}=this.form;
  console.log(stop)
  this.search.GetStopFlights(this.stop).subscribe(data=>{console.log(data);
  this.result=data;
  console.log(this.result);
  return this.result;
  },
  err => {
    this.content = JSON.parse(err.error).message;
  }
  )

}

sortByType(){
  console.log("bb")
  const{flight_type}=this.form;
  this.search.GetTypeFlights(flight_type).subscribe(data=>{console.log(data);
    this.result=data;
    console.log(this.result);
    return this.result;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    }
    )
}

sortByPrice(){
  console.log("c")
}

sortBydtime(){
  console.log("d")
}

sortByatime(){
  console.log("ee")
}

clickFunction():void{
  {this.router.navigate(["/user/:flight_id/:date"])}
}

clickFunction2(flight_id:number,date:Date):void{
  { 
    this.router.navigate(["/user/:flight_id/:date"])
  }
   
   
 }
 reloadPage(): void {
  window.location.reload();
}

}
