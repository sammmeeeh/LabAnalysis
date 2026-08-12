using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class Fourchette
{
    public int Id { get; set; }

    public decimal ValeurMin { get; set; }

    public decimal ValeurMax { get; set; }

    public bool Active { get; set; }

    public int ArticleId { get; set; }

    public int TypeAnalyseId { get; set; }

    public virtual Article Article { get; set; } = null!;

    public virtual TypesAnalyse TypeAnalyse { get; set; } = null!;
}
