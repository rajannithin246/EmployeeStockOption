using Microsoft.AspNetCore.Mvc;
using WebCore.Data;
using WebCore.Models;

namespace WebCore.Controllers
{
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }
        [HttpPost("api/user/insert")]
        public IActionResult InsertUser([FromBody] UserInputModel model)
        {
            if (model == null)
            {
                return BadRequest("Invalid input data.");
            }

            // Create a new User entity
            var user = new User
            {
                Username = model.Username,
                Email = model.Email,
                PasswordHash = PasswordHasher.HashPassword(model.Password),
                Role = model.IsAdmin ? "admin" : "user"
            };

            // Add the user to the database
            _context.Users.Add(user);
            _context.SaveChanges();

            // You can return a success message or the created user's ID
            return Ok(new
            {
                status = "success",
                message = "User data inserted successfully",
                data = new { userId = user.UserId }
            });
        }
    }
}
