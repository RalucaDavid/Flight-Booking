import { Component, OnInit } from '@angular/core';
import { FlightRm } from '../api/models';
import { FlightService } from './../api/services/flight.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrl: './search-flights.component.css'
})
export class SearchFlightsComponent implements OnInit{

  searchResult: FlightRm[] = []

  constructor(private flightService: FlightService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.search();
  }

  searchForm = this.fb.group({
    source: [''],
    destination: [''],
    fromDate: [''],
    toDate: [''],
    numberOfPassengers: [1]
  })

  search() {
    const searchData = {
      source: this.searchForm.value.source as string,
      destination: this.searchForm.value.destination as string,
      fromDate: this.searchForm.value.fromDate as string,
      toDate: this.searchForm.value.toDate as string,
      numberOfPassengers: this.searchForm.value.numberOfPassengers as number
    };

    this.flightService.searchFlight(searchData)
      .subscribe(r => this.searchResult = r,
       this.handleError)
  }

  private handleError(err: any) {
    console.log("Response Error. Status:", err.status)
    console.log("Response Error. Status Text:", err.statusText)
    console.log(err)
  }
}
