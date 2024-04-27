using System.ComponentModel;

namespace Flight_Booking.Server.Dtos
{
    public record FlightSearchParameters(
        [DefaultValue("12/25/2022 10:40:00 AM")]
        DateTime? FromDate,
        [DefaultValue("12/26/2022 10:40:00 AM")]
        DateTime? ToDate,
        [DefaultValue("Bucharest")]
        string? Source,
        [DefaultValue("Berlin")]
        string? Destination,
        [DefaultValue(1)]
        int? NumberOfPassengers
        );
}
