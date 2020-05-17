using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using videotrak.Data;


namespace videotrak
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Creaying a host based on the Startup class
            var host =  CreateWebHostBuilder(args).Build();

            // Creating a scope for the application
            using (var scope = host.Services.CreateScope())
            {
                // Getting service provider to resolve dependencies
                var services = scope.ServiceProvider;
                try
                {
                    // Initializing the database
                    var context = services.GetRequiredService<VideoContext>();
                    Seed.Initialize(context);
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occurred while seeding the database.");
                }
            }

            host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
