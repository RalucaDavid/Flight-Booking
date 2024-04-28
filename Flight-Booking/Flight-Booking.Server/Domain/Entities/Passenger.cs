namespace Flight_Booking.Server.Domain.Entities
{
    public record Passenger(
        string Email,
        string Password,
        string FirstName,
        string LastName,
        string Gender
        );
}
