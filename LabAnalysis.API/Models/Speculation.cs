using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class Speculation
{
    public int Id { get; set; }

    public string Nom { get; set; } = null!;

    public virtual ICollection<Article> Articles { get; set; } = new List<Article>();
}
