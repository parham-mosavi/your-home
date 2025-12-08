namespace api.Interfaces;

public interface ITecAccountRepository
{
    public Task<LoggedInTecDto?> RegisterAsync(Technician tecnocine, CancellationToken cancellationToken);

    public Task<LoggedInTecDto?> LoginAsync(LoginTecDto loginTecDto, CancellationToken cancellationToken);

}