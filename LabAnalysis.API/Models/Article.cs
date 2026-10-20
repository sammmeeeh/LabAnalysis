using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class Article
{
    public int Id { get; set; }

    public string Nom { get; set; } = null!;

    public string? Description { get; set; }

    public int SousFamilleId { get; set; }

    public int SpeculationId { get; set; }

    public virtual ICollection<DemandesTest> DemandesTests { get; set; } = new List<DemandesTest>();

    public virtual ICollection<Fourchette> Fourchettes { get; set; } = new List<Fourchette>();

    public virtual SousFamille SousFamille { get; set; } = null!;

    public virtual Speculation Speculation { get; set; } = null!;
}
