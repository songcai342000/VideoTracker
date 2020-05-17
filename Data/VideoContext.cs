using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using videotrak.Models;
using Microsoft.EntityFrameworkCore;

namespace videotrak.Data
{
    public class VideoContext : DbContext
    {
        public VideoContext(DbContextOptions<VideoContext> options) : base(options) { 
        
        }

        public DbSet<Video> Videos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           modelBuilder.Entity<Video>().ToTable("Videos");
        }
    }
}
