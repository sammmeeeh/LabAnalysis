using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class ReferencesMethode
{
    public int Id { get; set; }

    public string Nom { get; set; } = null!;

    public virtual ICollection<TypesAnalyse> TypesAnalyses { get; set; } = new List<TypesAnalyse>();
}
