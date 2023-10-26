using Microsoft.EntityFrameworkCore;
using WebCore.Data;
using WebCore.Interface;
using WebCore.Models;

namespace WebCore.Services
{
    public class AuthService : IAuthService
    {
        private readonly AppDbContext _context; // Inject your DbContext

        public AuthService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<User> AuthenticateAsync(string email, string password)
        {
            // Query the database for the user with the provided email
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == email);

            // Verify the user's password
            if (user != null && PasswordHasher.VerifyPassword(password, user.PasswordHash))
            {
                return user; // Authentication successful
            }

            return null; // Authentication failed
        }
    }

}
