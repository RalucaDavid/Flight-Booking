﻿namespace Flight_Booking.Server.ReadModels
{
    public record PassengerRm(
        string Email,
        string FirstName,
        string LastName,
        bool Gender);
}
