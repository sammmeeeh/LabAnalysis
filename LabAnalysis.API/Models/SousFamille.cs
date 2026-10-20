using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class SousFamille
{
    public int Id { get; set; }

    public string Nom { get; set; } = null!;

    public int FamilleId { get; set; }

    public virtual ICollection<Article> Articles { get; set; } = new List<Article>();

    public virtual Famille Famille { get; set; } = null!;
}
