using System.Collections.Generic;

namespace Movies.API.Models
{
    public class Actor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Sex { get; set; }
        public string DOB { get; set; }
        public string Bio { get; set; }

        //public ICollection<Movie> Movies { get; set; }
    }
}
