using Microsoft.AspNetCore.Mvc;
using WebCore.Interface;
using WebCore.Models;

namespace WebCore.Controllers
{
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("api/login/user")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var user = await _authService.AuthenticateAsync(loginDto.Email, loginDto.Password);

            if (user == null)
            {
                return Unauthorized(); 
            }
            else
            {
                return Ok(new
                {
                    status = "success",
                    message = "User data inserted successfully",
                    data = new { userId = user.UserId, userName = user.Username, role = user.Role }
                });

            }

        }
    }

}
