using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;
using WebCore;
using WebCore.Data;
using WebCore.Models;


public class RegistrationController : ControllerBase
{
    private readonly AppDbContext _context;

    public RegistrationController(AppDbContext context)
    {
        _context = context;
    }
    [HttpPost("api/registration/user")]
    public IActionResult Register([FromBody] UserInputModel model)
    {
        if (model == null)
        {
            return BadRequest("Invalid input data.");
        }

        
        var user = new User
        {
            Username = model.Username,
            Email = model.Email,
            PasswordHash = PasswordHasher.HashPassword(model.Password),
            Role = model.IsAdmin ? "admin" : "user"
        };

       
        _context.Users.Add(user);
        _context.SaveChanges();

        //var emailModel = new RegistrationEmailViewModel
        //{
        //    UserName = user.Username,
        //    LoginUrl = "https://your-portal-url.com/login" 
        //};

        //SendRegistrationEmail(user.Email, emailModel);

       
        return Ok(new
        {
            status = "success",
            message = "User data inserted successfully",
            data = new { userId = user.UserId, userName = user.Username, role = user.Role }
        });
    }

    private void SendRegistrationEmail(string toEmail, RegistrationEmailViewModel emailModel)
    {
        var smtpClient = new SmtpClient("your-smtp-server.com")
        {
            Port = 587, // Update the port as per your SMTP server settings
            Credentials = new NetworkCredential("your-email@example.com", "your-password"),
            EnableSsl = true,
        };

        var mailMessage = new MailMessage
        {
            From = new MailAddress("your-email@example.com"),
            Subject = "Registration Successful",
            IsBodyHtml = true,
        };

        mailMessage.To.Add(toEmail);

        // Construct the HTML email content
        mailMessage.Body = $@"
        <html>
            <body>
                <h1>Registration Successful</h1>
                <p>Your registration was successful. You can now log in to our portal.</p>
                <a href=""{emailModel.LoginUrl}"">Login to Portal</a>
            </body>
        </html>
    ";

        smtpClient.Send(mailMessage);
    }
}
