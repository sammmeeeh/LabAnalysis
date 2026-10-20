using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class Famille
{
    public int Id { get; set; }

    public string Nom { get; set; } = null!;

    public virtual ICollection<SousFamille> SousFamilles { get; set; } = new List<SousFamille>();
}
