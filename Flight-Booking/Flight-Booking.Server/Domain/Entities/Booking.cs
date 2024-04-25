namespace Flight_Booking.Server.Domain.Entities
{
    public record Booking(
        Guid FlightId,
        string PassengerEmail,
        byte NumberOfSeats
        );
    
}
