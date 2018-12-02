using System;
using System.Collections.Generic;

namespace Movies.API.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string YearOfRelease { get; set; }
        public string Plot { get; set; }
        public string Poster { get; set; }

        //public ICollection<Actor> Actors { get; set; }
        //public Producer Producer { get; set; }
    }
}
