namespace WebCore.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; } // Add this property for the hashed password
        public string Role { get; set; }
    }

    public class Employee
    {
        public int EmployeeId { get; set; }
        public int UserId { get; set; } // Foreign key reference to User
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    public class Admin
    {
        public int AdminId { get; set; }
        public int UserId { get; set; } // Foreign key reference to User
    }
}
