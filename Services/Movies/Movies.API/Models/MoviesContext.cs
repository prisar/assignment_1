using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Movies.API.Models
{
    public class MoviesContext : DbContext
    {
        public MoviesContext(DbContextOptions<MoviesContext> options) : base(options)
        {
        }

        public DbSet<Actor> Actors { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Producer> Producers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Actor>(ConfigureActor);
            modelBuilder.Entity<Movie>(ConfigureMovie);
            modelBuilder.Entity<Producer>(ConfigureProducer);
        }

        private void ConfigureActor(EntityTypeBuilder<Actor> builder)
        {
            builder.ToTable("Actors");
        }

        private void ConfigureMovie(EntityTypeBuilder<Movie> builder)
        {
            builder.ToTable("Movies");
        }

        private void ConfigureProducer(EntityTypeBuilder<Producer> builder)
        {
            builder.ToTable("Producers");
        }
    }
}
