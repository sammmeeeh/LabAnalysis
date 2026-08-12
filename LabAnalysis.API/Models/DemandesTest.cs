using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class DemandesTest
{
    public int Id { get; set; }

    public DateTime DateDemande { get; set; }

    public string Statut { get; set; } = null!;

    public int? ContactClientId { get; set; }

    public int UsineId { get; set; }

    public int ArticleId { get; set; }

    public virtual Article Article { get; set; } = null!;

    public virtual ContactsClient? ContactClient { get; set; }

    public virtual ICollection<Echantillon> Echantillons { get; set; } = new List<Echantillon>();

    public virtual Rapport? Rapport { get; set; }

    public virtual Usine Usine { get; set; } = null!;
}
