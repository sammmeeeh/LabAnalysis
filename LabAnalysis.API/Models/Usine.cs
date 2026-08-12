using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class Usine
{
    public int Id { get; set; }

    public string Nom { get; set; } = null!;

    public string? Localisation { get; set; }

    public int ClientId { get; set; }

    public virtual Client Client { get; set; } = null!;

    public virtual ICollection<DemandesTest> DemandesTests { get; set; } = new List<DemandesTest>();
}
