using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReactAPIController : ControllerBase
    {
        [Route("EmployeeList")]
        [HttpGet]
        public IEnumerable<EmployeeModel> EmployeeList()
        {
            List<EmployeeModel> employee = new List<EmployeeModel>();
            employee.Add(new EmployeeModel() { ID = 1, Name = "Sunil", Location = "Pune", Salary = "1000" });
            employee.Add(new EmployeeModel() { ID = 2, Name = "Mohan", Location = "Delhi", Salary = "45000" });
            employee.Add(new EmployeeModel() { ID = 3, Name = "Sagar", Location = "Bangalore", Salary = "29000" });
            return employee;
        }

        // GET: api/ReactAPI
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/ReactAPI/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/ReactAPI
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/ReactAPI/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
