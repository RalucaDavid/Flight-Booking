import { Component, OnInit } from '@angular/core';
import { FlightRm } from '../api/models';
import { FlightService } from './../api/services/flight.service';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrl: './search-flights.component.css'
})
export class SearchFlightsComponent {

  searchResult: FlightRm[] = []

  constructor(private flightService: FlightService) {

  }

  search() {
    this.flightService.searchFlight({})
      .subscribe(r => this.searchResult = r,
       this.handleError)
  }

  private handleError(err: any) {
    console.log("Response Error. Status:", err.status)
    console.log("Response Error. Status Text:", err.statusText)
    console.log(err)
  }
}
