using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using videotrak.Models;

namespace videotrak.Data
{
    public class Seed
    {
        public static void Initialize(VideoContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Videos.Any())
            {
                return;   // DB has been seeded
            }

            context.Videos.AddRange(

                new Video
                {
                    Title = "Raghuvamsa Sudha",
                    Link = "https://www.youtube.com/watch?v=l89ZaBqYiTA",
                    Genre = "Music",
                    Watched = true
                },
                new Video
                {
                    Title = "Kapil finds a match for Sarla",
                    Link = "https://www.youtube.com/watch?v=GfHEPKgkkpw",
                    Genre = "Comedy",
                    Watched = true
                },
                new Video
                {
                    Title = "Arvind Gupta TED Talk",
                    Link = "https://www.youtube.com/watch?v=KnCqR2yUXoU",
                    Genre = "Inspirational",
                    Watched = true
                },
                new Video
                {
                    Title = "Event Loop - Philip Roberts",
                    Link = "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
                    Genre = "Tech",
                    Watched = true
                }
            );
            context.Actors.AddRange(

                new Actor
                {
                    ActorName = "Li Jun"
                },
                new Actor
                {
                    ActorName = "Cai Yang"
                },
                new Actor
                {
                    ActorName = "Fu Lai"
                }
            );

            //foreach (Video v in videos)
            //{
            //  context.Videos.Add(v);
            //}
            context.SaveChanges();
        }

    }
}
