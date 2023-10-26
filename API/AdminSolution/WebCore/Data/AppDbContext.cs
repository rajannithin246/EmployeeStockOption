using Microsoft.EntityFrameworkCore;
using WebCore.Models;

namespace WebCore.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
      
        //public void InitializeDatabase()
        //{
        //    // Apply pending migrations
        //    Database.Migrate();

            
        //    if (!Users.Any())
        //    {
        //        // Create an initial admin user
        //        var admin = new Admin
        //        {
        //            UserId = 1,
        //            PasswordHash = PasswordHasher.HashPassword("hashed_password"),
        //            Email = "admin@example.com",
        //            IsDeleted = false,
        //        };
        //        Admins.Add(admin);
        //        SaveChanges();
        //    }
        //}



    }
}
