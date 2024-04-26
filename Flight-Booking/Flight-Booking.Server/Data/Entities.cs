using Flight_Booking.Server.Domain.Entities;
using System;

namespace Flight_Booking.Server.Data
{
    public class Entities
    {
        public IList<Passenger> Passengers = new List<Passenger>();
        public List<Flight> Flights = new List<Flight>();
    }
}
