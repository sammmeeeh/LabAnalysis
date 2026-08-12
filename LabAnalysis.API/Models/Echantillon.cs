using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class Echantillon
{
    public int Id { get; set; }

    public string CodeBarre { get; set; } = null!;

    public DateTime? DateReception { get; set; }

    public string Statut { get; set; } = null!;

    public int DemandeTestId { get; set; }

    public int NatureEchantillonId { get; set; }

    public virtual ICollection<Analysis> Analyses { get; set; } = new List<Analysis>();

    public virtual DemandesTest DemandeTest { get; set; } = null!;

    public virtual NaturesEchantillon NatureEchantillon { get; set; } = null!;
}
