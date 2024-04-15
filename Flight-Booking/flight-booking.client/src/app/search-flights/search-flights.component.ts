import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrl: './search-flights.component.css'
})
export class SearchFlightsComponent{

  searchResult: FlightRm[] = [
    {
      airline: "American Airlines",
      remainingNumberOfSeats: 500,
      departure: { time: Date.now().toString(), place: "Los Angeles" },
      arrival: { time: Date.now().toString(), place: "Istanbul" },
      price: "350",
    },
    {
      airline: "Tarom",
      remainingNumberOfSeats: 50,
      departure: { time: Date.now().toString(), place: "Berlin" },
      arrival: { time: Date.now().toString(), place: "Bucharest" },
      price: "450",
    },
    {
      airline: "Wizz Air",
      remainingNumberOfSeats: 367,
      departure: { time: Date.now().toString(), place: "Paris" },
      arrival: { time: Date.now().toString(), place: "Rome" },
      price: "600",
    }
  ]

}

export interface FlightRm {
  airline: string;
  arrival: TimePlaceRm;
  departure: TimePlaceRm;
  price: string;
  remainingNumberOfSeats: number;
}

export interface TimePlaceRm{
  place: string;
  time: string;
}
