using System;
using System.Collections.Generic;

namespace LabAnalysis.API.Models;

public partial class Rapport
{
    public int Id { get; set; }

    public DateTime DateGeneration { get; set; }

    public string? PdfFile { get; set; }

    public int DemandeTestId { get; set; }

    public virtual DemandesTest DemandeTest { get; set; } = null!;
}
