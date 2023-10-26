using WebCore.Models;

namespace WebCore.Interface
{
    public interface IAuthService
    {
        Task<User> AuthenticateAsync(string email, string password);
    }
}
