using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace videotrak.Models
{
    public class Video
    {
        public int VideoId { get; set; }
        public string Title { get; set; }
        public string Link { get; set; }
        public bool Watched { get; set; }
        public string Genre { get; set; }

    }
}
