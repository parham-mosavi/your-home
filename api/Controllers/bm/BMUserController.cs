
using Microsoft.AspNetCore.Authorization;

namespace api.Controllers.bm;

[Authorize]
public class BMUserController(IBMUserRepository bMUserRepository) : BaseApiController
{
    [HttpPut("update")]
    public async Task<ActionResult<UpdateResult>> UpdateById(BuildingManeger buildingManeger, CancellationToken cancellationToken)
    {
        string? userId = User.GetUserId();

        if (userId is null)
        {
            return Unauthorized("login first");
        }

        UpdateResult? user = await bMUserRepository.UpdateByIdAsync(userId, buildingManeger, cancellationToken);

        if (user is null) return BadRequest("try again");

        return user;
    }
}
