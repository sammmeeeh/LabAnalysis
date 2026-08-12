using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LabAnalysis.API.Data;
using LabAnalysis.API.DTOs;
using LabAnalysis.API.Models;
using LabAnalysis.API.Services;

namespace LabAnalysis.API.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly TokenService _tokenService;

        public AuthController(AppDbContext context, TokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto dto)
        {
            if (await _context.Utilisateurs.AnyAsync(u => u.Email == dto.Email))
                return BadRequest("Cet email est déjà utilisé.");

            var user = new Utilisateur
            {
                Nom = dto.Nom,
                Email = dto.Email,
                MotDePasse = BCrypt.Net.BCrypt.HashPassword(dto.MotDePasse),
                Role = Enum.Parse<RoleUtilisateur>(dto.Role),
                DateCreation = DateTime.UtcNow
            };

            _context.Utilisateurs.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Utilisateur créé avec succès." });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto dto)
        {
            var user = await _context.Utilisateurs
                .FirstOrDefaultAsync(u => u.Email == dto.Email);

            if (user == null || !BCrypt.Net.BCrypt.Verify(dto.MotDePasse, user.MotDePasse))
                return Unauthorized("Email ou mot de passe incorrect.");

            var token = _tokenService.CreateToken(user);

            return Ok(new
            {
                token,
                user = new { user.Id, user.Nom, user.Email, user.Role }
            });
        }
    }
}