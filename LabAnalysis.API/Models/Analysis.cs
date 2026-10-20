using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class Analysis
{
    public int Id { get; set; }

    public DateTime? DateAnalyse { get; set; }

    public string Statut { get; set; } = null!;

    public int EchantillonId { get; set; }

    public int TypeAnalyseId { get; set; }

    public int TechnicienId { get; set; }

    public virtual Echantillon Echantillon { get; set; } = null!;

    public virtual Resultat? Resultat { get; set; }

    public virtual Utilisateur Technicien { get; set; } = null!;

    public virtual TypesAnalyse TypeAnalyse { get; set; } = null!;
}
