using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class Utilisateur
{
    public int Id { get; set; }
    public string Nom { get; set; } = null!;
    public string Email { get; set; } = null!;
    public string MotDePasse { get; set; } = null!;
    public RoleUtilisateur Role { get; set; }   // était string, devient l'enum
    public DateTime DateCreation { get; set; }

    public virtual ICollection<Analysis> Analyses { get; set; } = new List<Analysis>();
    public virtual Client? Client { get; set; }
    public virtual ICollection<DecisionsQualite> DecisionsQualites { get; set; } = new List<DecisionsQualite>();
}