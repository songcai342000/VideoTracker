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
        public DbSet<Actor> Actors { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VideoActor>()
            .HasKey(va => new { va.VideoId, va.ActorId });

            modelBuilder.Entity<VideoActor>()
                .HasOne(va => va.Video)
                .WithMany(v => v.VideoActors)
                .HasForeignKey(va => va.VideoId);

            modelBuilder.Entity<VideoActor>()
                .HasOne(va => va.Actor)
                .WithMany(a => a.VideoActors)
                .HasForeignKey(va => va.ActorId);
        }
    }
}
