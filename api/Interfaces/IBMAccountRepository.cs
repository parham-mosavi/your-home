namespace api.Interfaces;

public interface IBMAccountRepository
{
    public Task<LoggedInManeger?> RegisterAsync(RegisterDTO registerDTO, CancellationToken cancellationToken);

    public Task<LoggedInManeger?> LoginAsync(LoginTecDto logintecdto, CancellationToken cancellationToken);

}
