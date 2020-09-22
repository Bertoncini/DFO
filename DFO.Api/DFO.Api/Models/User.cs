using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DFO.Api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }

        public void Validation()
        {
            if (string.IsNullOrWhiteSpace(Name))
                throw new Exception("Name is required");

            if (Name.Length > 50)
                throw new Exception("Name max length is 50");

            if (string.IsNullOrWhiteSpace(Address))
                throw new Exception("Address is required");

            if (Address.Length > 50)
                throw new Exception("Address max length is 50");
        }
    }
}
