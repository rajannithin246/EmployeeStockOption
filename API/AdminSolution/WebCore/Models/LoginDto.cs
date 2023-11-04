namespace WebCore.Models
{
    public class LoginDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
    public class RegistrationEmailViewModel
    {
        public string UserName { get; set; }
        public string LoginUrl { get; set; }
    }
}
