import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
  FlightSearchApi = 'http://localhost:8085/flight.com/filterBySourceDestinationDate/';
  FlightSearchAllApi = 'http://localhost:8085/flight.com/flightDetails';
  FlightSearchStopsApi = 'http://localhost:8085/flight.com/filterByStops/';
  FlightSearchTypeApi = 'http://localhost:8085/flight.com/filterByType/';

  FlightPnrSearchApi = 'http://localhost:8085/flight.com/filterBySourceDestinationDate/';

  FlightSetAllApi = 'http://localhost:8085/flight.com/addFlight';
  FlightUpdateAllApi = 'http://localhost:8085/flight.com//updateFlight/';
  FlightDeleteAllApi = 'http://localhost:8085/flight.com//DeleteFlight/';

  FlightSortAllApi = 'http://localhost:8085/flight.com/sortFlights';
  
  constructor(private http:HttpClient) { }

  GetFlights(departure_location:any,arrival_location:any,date:any):Observable<Flight[]>{
    return this.http.get<Flight[]>(this.FlightSearchApi+ departure_location +"/" +arrival_location+"/"+date);
  }

  GetPnr(flight_id:any):Observable<Flight[]>{
    return this.http.get<Flight[]>(this.FlightPnrSearchApi+ flight_id);
  }

  UpdateFlights(data:any,flightId:any){
    return this.http.put<Flight[]>(this.FlightUpdateAllApi+flightId,data);
  }

  DeleteFlights(data:any,flightId:any){
    return this.http.delete<Flight[]>(this.FlightDeleteAllApi+flightId,data);
  }

  GetAllFlights():Observable<Flight[]>{
    return this.http.get<Flight[]>(this.FlightSearchAllApi);
  }

  SetAllFlights(data:any):Observable<Flight[]>{
    return this.http.post<Flight[]>(this.FlightSetAllApi,data);
  }

  GetStopFlights(stop:any):Observable<Flight[]>{
    return this.http.get<Flight[]>(this.FlightSearchStopsApi+stop);
  }

  
  GetTypeFlights(type:any):Observable<Flight[]>{
    return this.http.get<Flight[]>(this.FlightSearchTypeApi+type);
  }

  GetAllFlightsSort(ticketPrice:any,departureTime:any,arrivalTime:any,numOfStops:any,flightType:any):Observable<Flight[]>{
    return this.http.get<Flight[]>(this.FlightSortAllApi+"/"+ticketPrice+"/"+departureTime+"/"+arrivalTime+"/"+numOfStops+"/"+flightType);
  }

}