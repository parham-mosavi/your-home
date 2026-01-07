using Microsoft.AspNetCore.SignalR.Protocol;

namespace api.Interfaces;

public interface IBMAccountRepository
{
    public Task<LoggedInManeger?> RegisterAsync(RegisterDTO registerDTO, CancellationToken cancellationToken);

    public Task<LoggedInManeger?> LoginAsync(LoginTecDto logintecdto, CancellationToken cancellationToken);

    public Task<LoggedInManeger?> ReloadLoggedInUserAsync(string userId, string token ,CancellationToken cancellationToken);

}
