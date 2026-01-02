namespace api.Interfaces;

public interface ITecMemberRepository
{
    public Task<List<Technician>> GetAllTecAsync(CancellationToken cancellationToken);

    public Task<List<Technician>> GetByTechniqueAsync(string Technique, CancellationToken cancellationToken);
}
