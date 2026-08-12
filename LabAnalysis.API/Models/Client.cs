using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class Client
{
    public int Id { get; set; }

    public string RaisonSociale { get; set; } = null!;

    public string? Adresse { get; set; }

    public virtual ICollection<ContactsClient> ContactsClients { get; set; } = new List<ContactsClient>();

    public virtual Utilisateur IdNavigation { get; set; } = null!;

    public virtual ICollection<Usine> Usines { get; set; } = new List<Usine>();
}
