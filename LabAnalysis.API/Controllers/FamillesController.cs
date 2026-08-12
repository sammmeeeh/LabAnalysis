using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LabAnalysis.API.Data;
using LabAnalysis.API.Models;

namespace LabAnalysis.API.Controllers
{
    [ApiController]
    [Route("api/familles")]
    public class FamillesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public FamillesController(AppDbContext context)
        {
            _context = context;
        }

        // GET api/familles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Famille>>> GetAll()
        {
            return await _context.Familles.ToListAsync();
        }

        // GET api/familles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Famille>> GetById(int id)
        {
            var famille = await _context.Familles.FindAsync(id);
            if (famille == null)
                return NotFound();

            return famille;
        }

        // POST api/familles
        [HttpPost]
        public async Task<ActionResult<Famille>> Create(Famille famille)
        {
            _context.Familles.Add(famille);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = famille.Id }, famille);
        }

        // PUT api/familles/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, Famille famille)
        {
            if (id != famille.Id)
                return BadRequest("L'id de l'URL ne correspond pas à l'id de l'objet.");

            _context.Entry(famille).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE api/familles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var famille = await _context.Familles.FindAsync(id);
            if (famille == null)
                return NotFound();

            _context.Familles.Remove(famille);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}