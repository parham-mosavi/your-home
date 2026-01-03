namespace api.Controllers;

public class TecUserController(ITecUserRepository tecUserRepository) : BaseApiController
{
    [HttpPut("updatebyid/{userId}")]
    public async Task<ActionResult<UpdateTecDto?>> Update(string userId, Technician technician, CancellationToken cancellationToken)
    {
        UpdateTecDto? updateTecDto = await tecUserRepository.Update(userId, technician, cancellationToken);

        if (updateTecDto is null)
        {
            return NotFound("Operation failed");
        }

        return updateTecDto;
    }
}