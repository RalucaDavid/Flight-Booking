namespace Flight_Booking.Server.ReadModels
{
    public record PassengerRm(
        string Email,
        string Password,
        string FirstName,
        string LastName,
        string Gender);
}
