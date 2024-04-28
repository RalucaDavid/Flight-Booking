using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Flight_Booking.Server.Dtos;
using Flight_Booking.Server.ReadModels;
using Flight_Booking.Server.Domain.Entities;
using Flight_Booking.Server.Data;

namespace Flight_Booking.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PassengerController : ControllerBase
    {
        private readonly Entities _entities;

        public PassengerController(Entities entities)
        {
            _entities = entities;
        }

        [HttpPost]
        [ProducesResponseType(201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public IActionResult Register(NewPassengerDto dto)
        {
            var existingPassenger = _entities.Passengers.FirstOrDefault(p => p.Email == dto.Email);

            if (existingPassenger != null)
            {
                return BadRequest();
            }

            _entities.Passengers.Add(new Passenger(
                dto.Email,
                dto.Password,
                dto.FirstName,
                dto.LastName,
                dto.Gender
                ));
            _entities.SaveChanges();
            return CreatedAtAction(nameof(Find), new { email = dto.Email, password = dto.Password }, dto);
        }

        [HttpGet("{email}/{password}")]
        public ActionResult<PassengerRm> Find(string email, string password)
        {
            var passenger = _entities.Passengers.FirstOrDefault(p => p.Email == email && p.Password == password);

            if (passenger == null)
            {
                return NotFound();
            }

            var rm = new PassengerRm(
                passenger.Email,
                passenger.Password,
                passenger.FirstName,
                passenger.LastName,
                passenger.Gender
                );
            return Ok(rm);
        }
    }
}
