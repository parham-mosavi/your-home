using Microsoft.AspNetCore.Authorization;

namespace api.Controllers;

public class BMAccountController(IBMAccountRepository bMAccountRepository) : BaseApiController
{
    [HttpPost("register")]
    public async Task<ActionResult<LoggedInManeger>> Register(RegisterDTO registerDTO, CancellationToken cancellationToken)
    {
        if (registerDTO.Password != registerDTO.ConfirmPassword)
        {
            return BadRequest("password do not match");
        }

        LoggedInManeger? user = await bMAccountRepository.RegisterAsync(registerDTO, cancellationToken);

        if (user is null)
        {
            return BadRequest("phone Number alredy token");
        }

        return user;
    }

    [HttpPost("login")]
    public async Task<ActionResult<LoggedInManeger>> Login(LoginTecDto logintecdto, CancellationToken cancellationToken)
    {
        LoggedInManeger? user = await bMAccountRepository.LoginAsync(logintecdto, cancellationToken);

        if (user is null)
        {
            return BadRequest();
        }

        return user;
    }

    [Authorize]
    [HttpGet]
    public async Task<ActionResult<LoggedInManeger>> ReloadLoggedInUser(CancellationToken cancellationToken)
    {
        string? token = null;

        bool isTokenValid = HttpContext.Request.Headers.TryGetValue
            ("Authorization", out var authHeader);

        if (isTokenValid)
            token = authHeader.ToString().Split(' ').Last();
        
        Console.WriteLine(token);

        if (string.IsNullOrEmpty(token))
            return Unauthorized("Token is expired or invalid. Login again.");

        string? userId = User.GetUserId();
        
        if (userId is null)
        return Unauthorized("Token is expired or invalid. Login again.2");

        LoggedInManeger? loggedInManeger =
        await bMAccountRepository.ReloadLoggedInUserAsync(userId, token, cancellationToken);

        if(loggedInManeger is null) return Unauthorized("user is logged out");

        return loggedInManeger;
    }
}
