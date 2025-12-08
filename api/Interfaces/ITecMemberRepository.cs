namespace api.Interfaces;

public interface ITecMemberRepository
{
    public Task<List<Technician>> GetAllTec(CancellationToken cancellationToken);
}
