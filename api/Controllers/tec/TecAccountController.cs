namespace api.Controllers;

public class TecAccountController(ITecAccountRepository tecAccountRepository) : BaseApiController
{
    [HttpPost("register-tec")]
    public async Task<ActionResult<LoggedInTecDto>> Register(Technician technician, CancellationToken cancellationToken)
    {
        if (technician.Password != technician.ConfirmPassword)
        {
            return BadRequest("password do not match");
        }

        LoggedInTecDto? loggedInTecDto = await tecAccountRepository.RegisterAsync(technician, cancellationToken);

        if (loggedInTecDto is null)
        {
            return BadRequest("PhoneNumber is not true");
        }

        return loggedInTecDto;
    }

    [HttpPost("login-tec")]
    public async Task<ActionResult<LoggedInTecDto>> Login(LoginTecDto loginTecDto, CancellationToken cancellationToken)
    {
        LoggedInTecDto? loggedInTecDto = await tecAccountRepository.LoginAsync(loginTecDto, cancellationToken);

        if (loggedInTecDto is null)
        {
            return BadRequest("password or phoneNumber is do not mathe");
        }

        return loggedInTecDto;
    }
}