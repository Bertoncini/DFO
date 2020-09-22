using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DFO.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private Repository.User repositoryUser = new Repository.User();
        // GET api/values
        [HttpGet]
        public ActionResult<List<Models.User>> Get() => repositoryUser.Get();

        // GET api/values
        [HttpGet("{id}")]
        public ActionResult<Models.User> Get(int id)
        {
            var user = new Models.User();
            try
            {
                user = repositoryUser.Get(id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return user;
        }

        // GET api/values
        [HttpPost]
        public ActionResult Post(Models.User user)
        {
            try
            {
                repositoryUser.Insert(user);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/values
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody]Models.User user)
        {
            try
            {
                repositoryUser.Update(id, user);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}