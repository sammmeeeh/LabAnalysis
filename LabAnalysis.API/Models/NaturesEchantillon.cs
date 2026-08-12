using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class NaturesEchantillon
{
    public int Id { get; set; }

    public string Nom { get; set; } = null!;

    public virtual ICollection<Echantillon> Echantillons { get; set; } = new List<Echantillon>();
}
