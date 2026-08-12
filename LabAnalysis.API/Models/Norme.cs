using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class Norme
{
    public int Id { get; set; }

    public string Nom { get; set; } = null!;

    public decimal? ValeurReference { get; set; }

    public virtual ICollection<TypesAnalyse> TypesAnalyses { get; set; } = new List<TypesAnalyse>();
}
