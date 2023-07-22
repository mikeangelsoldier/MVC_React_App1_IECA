using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MVC_React_App1.Models;

namespace MVC_React_App1.Data
{
    public class MvcReactApp1Context : DbContext
    {
        public MvcReactApp1Context (DbContextOptions<MvcReactApp1Context> options)
            : base(options)
        {
        }

        public DbSet<MVC_React_App1.Models.Empleado> Empleado { get; set; } = default!;
    }
}
