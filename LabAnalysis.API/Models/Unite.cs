using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class Unite
{
    public int Id { get; set; }

    public string Symbole { get; set; } = null!;

    public virtual ICollection<TypesAnalyse> TypesAnalyses { get; set; } = new List<TypesAnalyse>();
}
