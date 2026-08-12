using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class DecisionsQualite
{
    public int Id { get; set; }

    public string Type { get; set; } = null!;

    public DateTime DateDecision { get; set; }

    public string Motif { get; set; } = null!;

    public int ResultatId { get; set; }

    public int ResponsableId { get; set; }

    public virtual Utilisateur Responsable { get; set; } = null!;

    public virtual Resultat Resultat { get; set; } = null!;
}
