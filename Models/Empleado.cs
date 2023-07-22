using System.ComponentModel.DataAnnotations;

namespace MVC_React_App1.Models
{

    public class Empleado
    {
        public int Id { get; set; }

        //[StringLength(50)]
        public string? Nombre { get; set; }

        //[StringLength(100)]
        public string? Correo { get; set; }

        //[StringLength(100)]
        public string? Direccion { get; set; }

        //[StringLength(50)]
        public string? Telefono { get; set; }

    }
}