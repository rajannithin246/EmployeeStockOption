using Microsoft.AspNetCore.Mvc;
using WebCore.Interface;
using WebCore.Models;

namespace WebCore.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var user = await _authService.AuthenticateAsync(loginDto.Email, loginDto.Password);

            if (user == null)
            {
                return Unauthorized(); // Return a 401 Unauthorized status if authentication fails
            }

           
            if (user.Role == "admin")
            {
                return Redirect("/admin/dashboard"); // Redirect to the admin dashboard
            }
            else
            {
                return Redirect("/user/dashboard"); // Redirect to the user dashboard
            }
        }
    }

}
