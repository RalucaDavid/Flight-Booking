namespace Flight_Booking.Server.Dtos
{
    public record BookDto(
        Guid FlightId,
        string PassengerEmail,
        byte NumberOfSeats
        );
    
}
