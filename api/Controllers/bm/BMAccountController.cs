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
}
