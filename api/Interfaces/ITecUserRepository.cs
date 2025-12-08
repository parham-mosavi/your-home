namespace api.Interfaces;

public interface ITecUserRepository
{
    public Task<UpdateTecDto?> Update(string userId, Technician technician, CancellationToken cancellationToken);

}