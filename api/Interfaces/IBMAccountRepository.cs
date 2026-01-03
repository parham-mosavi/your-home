namespace api.Interfaces;

public interface IBMAccountRepository
{
    public Task<LoggedInManeger?> RegisterAsync(BuildingManeger buildingManeger, CancellationToken cancellationToken);

    public Task<LoggedInManeger?> LoginAsync(LoginTecDto logintecdto, CancellationToken cancellationToken);

}
