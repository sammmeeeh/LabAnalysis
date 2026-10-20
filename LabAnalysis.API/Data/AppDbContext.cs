using System;
using System.Collections.Generic;
using LabAnalysis.API.Models;
using Microsoft.EntityFrameworkCore;

namespace LabAnalysis.API.Data;

public partial class AppDbContext : DbContext
{
    public AppDbContext()
    {
    }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Analysis> Analyses { get; set; }

    public virtual DbSet<Article> Articles { get; set; }

    public virtual DbSet<Client> Clients { get; set; }

    public virtual DbSet<ContactsClient> ContactsClients { get; set; }

    public virtual DbSet<DecisionsQualite> DecisionsQualites { get; set; }

    public virtual DbSet<DemandesTest> DemandesTests { get; set; }

    public virtual DbSet<Echantillon> Echantillons { get; set; }

    public virtual DbSet<Famille> Familles { get; set; }

    public virtual DbSet<Fourchette> Fourchettes { get; set; }

    public virtual DbSet<NaturesEchantillon> NaturesEchantillons { get; set; }

    public virtual DbSet<Norme> Normes { get; set; }

    public virtual DbSet<Rapport> Rapports { get; set; }

    public virtual DbSet<ReferencesMethode> ReferencesMethodes { get; set; }

    public virtual DbSet<Resultat> Resultats { get; set; }

    public virtual DbSet<SousFamille> SousFamilles { get; set; }

    public virtual DbSet<Speculation> Speculations { get; set; }

    public virtual DbSet<TypesAnalyse> TypesAnalyses { get; set; }

    public virtual DbSet<Unite> Unites { get; set; }

    public virtual DbSet<Usine> Usines { get; set; }

    public virtual DbSet<Utilisateur> Utilisateurs { get; set; }

    

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Analysis>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Analyses__3214EC075773D6F7");

            entity.Property(e => e.Statut)
                .HasMaxLength(30)
                .HasDefaultValue("EnAttente");

            entity.HasOne(d => d.Echantillon).WithMany(p => p.Analyses)
                .HasForeignKey(d => d.EchantillonId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Analyses_Echantillons");

            entity.HasOne(d => d.Technicien).WithMany(p => p.Analyses)
                .HasForeignKey(d => d.TechnicienId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Analyses_Techniciens");

            entity.HasOne(d => d.TypeAnalyse).WithMany(p => p.Analyses)
                .HasForeignKey(d => d.TypeAnalyseId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Analyses_TypesAnalyse");
        });

        modelBuilder.Entity<Article>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Articles__3214EC0752F17A92");

            entity.Property(e => e.Description).HasMaxLength(300);
            entity.Property(e => e.Nom).HasMaxLength(150);

            entity.HasOne(d => d.SousFamille).WithMany(p => p.Articles)
                .HasForeignKey(d => d.SousFamilleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Articles_SousFamilles");

            entity.HasOne(d => d.Speculation).WithMany(p => p.Articles)
                .HasForeignKey(d => d.SpeculationId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Articles_Speculations");
        });

        modelBuilder.Entity<Client>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Clients__3214EC077AE60C02");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Adresse).HasMaxLength(250);
            entity.Property(e => e.RaisonSociale).HasMaxLength(200);

            entity.HasOne(d => d.IdNavigation).WithOne(p => p.Client)
                .HasForeignKey<Client>(d => d.Id)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Clients_Utilisateurs");
        });

        modelBuilder.Entity<ContactsClient>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Contacts__3214EC0775E4E525");

            entity.ToTable("ContactsClient");

            entity.Property(e => e.Email).HasMaxLength(150);
            entity.Property(e => e.Fonction).HasMaxLength(100);
            entity.Property(e => e.Nom).HasMaxLength(150);
            entity.Property(e => e.Telephone).HasMaxLength(30);

            entity.HasOne(d => d.Client).WithMany(p => p.ContactsClients)
                .HasForeignKey(d => d.ClientId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_ContactsClient_Clients");
        });

        modelBuilder.Entity<DecisionsQualite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Decision__3214EC0754982440");

            entity.ToTable("DecisionsQualite");

            entity.HasIndex(e => e.ResultatId, "UQ__Decision__20BF3E6AFB9F5958").IsUnique();

            entity.Property(e => e.DateDecision).HasDefaultValueSql("(sysdatetime())");
            entity.Property(e => e.Motif).HasMaxLength(300);
            entity.Property(e => e.Type).HasMaxLength(20);

            entity.HasOne(d => d.Responsable).WithMany(p => p.DecisionsQualites)
                .HasForeignKey(d => d.ResponsableId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Decisions_Responsables");

            entity.HasOne(d => d.Resultat).WithOne(p => p.DecisionsQualite)
                .HasForeignKey<DecisionsQualite>(d => d.ResultatId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Decisions_Resultats");
        });

        modelBuilder.Entity<DemandesTest>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Demandes__3214EC072692DF45");

            entity.ToTable("DemandesTest");

            entity.Property(e => e.DateDemande).HasDefaultValueSql("(sysdatetime())");
            entity.Property(e => e.Statut)
                .HasMaxLength(30)
                .HasDefaultValue("Brouillon");

            entity.HasOne(d => d.Article).WithMany(p => p.DemandesTests)
                .HasForeignKey(d => d.ArticleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DemandesTest_Articles");

            entity.HasOne(d => d.ContactClient).WithMany(p => p.DemandesTests)
                .HasForeignKey(d => d.ContactClientId)
                .HasConstraintName("FK_DemandesTest_Contacts");

            entity.HasOne(d => d.Usine).WithMany(p => p.DemandesTests)
                .HasForeignKey(d => d.UsineId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_DemandesTest_Usines");
        });

        modelBuilder.Entity<Echantillon>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Echantil__3214EC07BEFCBA5A");

            entity.HasIndex(e => e.CodeBarre, "UQ__Echantil__C807AA947CBE19A5").IsUnique();

            entity.Property(e => e.CodeBarre).HasMaxLength(50);
            entity.Property(e => e.Statut)
                .HasMaxLength(30)
                .HasDefaultValue("EnAttente");

            entity.HasOne(d => d.DemandeTest).WithMany(p => p.Echantillons)
                .HasForeignKey(d => d.DemandeTestId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Echantillons_DemandesTest");

            entity.HasOne(d => d.NatureEchantillon).WithMany(p => p.Echantillons)
                .HasForeignKey(d => d.NatureEchantillonId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Echantillons_Natures");
        });

        modelBuilder.Entity<Famille>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Familles__3214EC0777734586");

            entity.HasIndex(e => e.Nom, "UQ__Familles__C7D1C61E87109C93").IsUnique();

            entity.Property(e => e.Nom).HasMaxLength(100);
        });

        modelBuilder.Entity<Fourchette>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Fourchet__3214EC072F6BA250");

            entity.HasIndex(e => new { e.ArticleId, e.TypeAnalyseId }, "UQ_Fourchette_ArticleType").IsUnique();

            entity.Property(e => e.Active).HasDefaultValue(true);
            entity.Property(e => e.ValeurMax).HasColumnType("decimal(10, 3)");
            entity.Property(e => e.ValeurMin).HasColumnType("decimal(10, 3)");

            entity.HasOne(d => d.Article).WithMany(p => p.Fourchettes)
                .HasForeignKey(d => d.ArticleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Fourchettes_Articles");

            entity.HasOne(d => d.TypeAnalyse).WithMany(p => p.Fourchettes)
                .HasForeignKey(d => d.TypeAnalyseId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Fourchettes_TypesAnalyse");
        });

        modelBuilder.Entity<NaturesEchantillon>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__NaturesE__3214EC076B146229");

            entity.ToTable("NaturesEchantillon");

            entity.HasIndex(e => e.Nom, "UQ__NaturesE__C7D1C61EBC541E6D").IsUnique();

            entity.Property(e => e.Nom).HasMaxLength(100);
        });

        modelBuilder.Entity<Norme>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Normes__3214EC078DB9C599");

            entity.Property(e => e.Nom).HasMaxLength(150);
            entity.Property(e => e.ValeurReference).HasColumnType("decimal(10, 3)");
        });

        modelBuilder.Entity<Rapport>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Rapports__3214EC07E96FD85F");

            entity.HasIndex(e => e.DemandeTestId, "UQ__Rapports__1627A475E6B580B5").IsUnique();

            entity.Property(e => e.DateGeneration).HasDefaultValueSql("(sysdatetime())");
            entity.Property(e => e.PdfFile).HasMaxLength(260);

            entity.HasOne(d => d.DemandeTest).WithOne(p => p.Rapport)
                .HasForeignKey<Rapport>(d => d.DemandeTestId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Rapports_DemandesTest");
        });

        modelBuilder.Entity<ReferencesMethode>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Referenc__3214EC07CAEC412E");

            entity.Property(e => e.Nom).HasMaxLength(150);
        });

        modelBuilder.Entity<Resultat>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Resultat__3214EC072FB7BC61");

            entity.HasIndex(e => e.AnalyseId, "UQ__Resultat__DC17E7B9791B5195").IsUnique();

            entity.Property(e => e.Commentaire).HasMaxLength(300);
            entity.Property(e => e.Valeur).HasColumnType("decimal(10, 3)");

            entity.HasOne(d => d.Analyse).WithOne(p => p.Resultat)
                .HasForeignKey<Resultat>(d => d.AnalyseId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Resultats_Analyses");
        });

        modelBuilder.Entity<SousFamille>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__SousFami__3214EC07283E4CA6");

            entity.Property(e => e.Nom).HasMaxLength(100);

            entity.HasOne(d => d.Famille).WithMany(p => p.SousFamilles)
                .HasForeignKey(d => d.FamilleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_SousFamilles_Familles");
        });

        modelBuilder.Entity<Speculation>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Speculat__3214EC0706C030B9");

            entity.HasIndex(e => e.Nom, "UQ__Speculat__C7D1C61E222EDEE8").IsUnique();

            entity.Property(e => e.Nom).HasMaxLength(100);
        });

        modelBuilder.Entity<TypesAnalyse>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__TypesAna__3214EC07EC6DE525");

            entity.ToTable("TypesAnalyse");

            entity.Property(e => e.Nom).HasMaxLength(150);

            entity.HasOne(d => d.Norme).WithMany(p => p.TypesAnalyses)
                .HasForeignKey(d => d.NormeId)
                .HasConstraintName("FK_TypesAnalyse_Normes");

            entity.HasOne(d => d.ReferenceMethode).WithMany(p => p.TypesAnalyses)
                .HasForeignKey(d => d.ReferenceMethodeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_TypesAnalyse_RefMethodes");

            entity.HasOne(d => d.Unite).WithMany(p => p.TypesAnalyses)
                .HasForeignKey(d => d.UniteId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_TypesAnalyse_Unites");
        });

        modelBuilder.Entity<Unite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Unites__3214EC07F43C0364");

            entity.HasIndex(e => e.Symbole, "UQ__Unites__3EBEC744308101FD").IsUnique();

            entity.Property(e => e.Symbole).HasMaxLength(20);
        });

        modelBuilder.Entity<Usine>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Usines__3214EC07BFAEF4B5");

            entity.Property(e => e.Localisation).HasMaxLength(200);
            entity.Property(e => e.Nom).HasMaxLength(150);

            entity.HasOne(d => d.Client).WithMany(p => p.Usines)
                .HasForeignKey(d => d.ClientId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Usines_Clients");
        });

        modelBuilder.Entity<Utilisateur>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Utilisat__3214EC075B6BDECB");

            entity.HasIndex(e => e.Email, "UQ__Utilisat__A9D10534D53E078A").IsUnique();

            entity.Property(e => e.DateCreation).HasDefaultValueSql("(sysdatetime())");
            entity.Property(e => e.Email).HasMaxLength(150);
            entity.Property(e => e.MotDePasse).HasMaxLength(256);
            entity.Property(e => e.Nom).HasMaxLength(150);
            entity.Property(e => e.Role).HasMaxLength(30);
        });

        modelBuilder.Entity<Utilisateur>()
        .Property(u => u.Role)
        .HasConversion<string>();
        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
