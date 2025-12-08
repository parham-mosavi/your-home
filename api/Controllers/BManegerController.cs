namespace api.Controllers;

public class BManegerController(IBManegerRepository bManegerRepository) : BaseApiController
{
    [HttpPost("register")]
    public async Task<ActionResult<LoggedInManeger>> Register(BuildingManeger buildingManeger, CancellationToken cancellationToken)
    {
        if (buildingManeger.Password != buildingManeger.ConfirmPassword)
        {
            return BadRequest("password do not match");
        }

        LoggedInManeger? user = await bManegerRepository.RegisterAsync(buildingManeger, cancellationToken);

        if (user is null)
        {
            return BadRequest();
        }

        return user;
    }

    [HttpPost("login")]
    public async Task<ActionResult<LoggedInManeger>> Login(LoginTecDto logintecdto, CancellationToken cancellationToken)
    {
        LoggedInManeger? user = await bManegerRepository.LoginAsync(logintecdto, cancellationToken);

        if (user is null)
        {
            return BadRequest();
        }

        return user;
    }
};