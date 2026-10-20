using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class Resultat
{
    public int Id { get; set; }

    public decimal Valeur { get; set; }

    public bool Conforme { get; set; }

    public string? Commentaire { get; set; }

    public int AnalyseId { get; set; }

    public virtual Analysis Analyse { get; set; } = null!;

    public virtual DecisionsQualite? DecisionsQualite { get; set; }
}
