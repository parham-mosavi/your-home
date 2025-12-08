namespace api.Interfaces;

public interface IBManegerRepository
{
    public Task<LoggedInManeger?> RegisterAsync(BuildingManeger buildingManeger, CancellationToken cancellationToken);

    public Task<LoggedInManeger?> LoginAsync(LoginTecDto logintecdto, CancellationToken cancellationToken);

}