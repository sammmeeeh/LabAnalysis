using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class TypesAnalyse
{
    public int Id { get; set; }

    public string Nom { get; set; } = null!;

    public int ReferenceMethodeId { get; set; }

    public int? NormeId { get; set; }

    public int UniteId { get; set; }

    public virtual ICollection<Analysis> Analyses { get; set; } = new List<Analysis>();

    public virtual ICollection<Fourchette> Fourchettes { get; set; } = new List<Fourchette>();

    public virtual Norme? Norme { get; set; }

    public virtual ReferencesMethode ReferenceMethode { get; set; } = null!;

    public virtual Unite Unite { get; set; } = null!;
}
