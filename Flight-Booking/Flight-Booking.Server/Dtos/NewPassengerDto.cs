using System.ComponentModel.DataAnnotations;

namespace Flight_Booking.Server.Dtos
{
    public record NewPassengerDto(
        [Required][EmailAddress][StringLength(100, MinimumLength =3)] string Email,
        [Required][StringLength(100, MinimumLength =3)] string Password,
        [Required][MinLength(2)][MaxLength(35)] string FirstName,
        [Required][MinLength(2)][MaxLength(35)] string LastName,
        [Required] string Gender
        );
}
