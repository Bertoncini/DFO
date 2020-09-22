using System;
using System.Collections.Generic;
using System.Linq;

namespace DFO.Api.Repository
{
    public class User
    {
        private static List<Models.User> _users = new List<Models.User>();

        public void Insert(Models.User user)
        {
            if (user.Id <= 0)
                user.Id = _users.Count() + 1;
            user.Validation();
            _users.Add(user);
        }

        public void Update(int id, Models.User user)
        {
            var located = Get(id);

            user.Id = located.Id;

            Insert(user);

            _users.Remove(located);
        }

        public Models.User Get(int id)
        {
            var located = _users.Where(u => u.Id == id).FirstOrDefault();

            if (located == null)
                throw new Exception("User not found");

            return located;
        }

        public List<Models.User> Get() => _users.ToList();
    }
}
