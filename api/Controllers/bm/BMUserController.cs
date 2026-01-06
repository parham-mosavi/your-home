
namespace api.Controllers.bm;

public class BMUserController(IBMUserRepository bMUserRepository) : BaseApiController
{
    [HttpPut("update-by-id/{userid}")]
    public async Task<ActionResult<BuildingManeger>> UpdateById(BuildingManeger buildingManeger, string userid, CancellationToken cancellationToken)
    {
        
    }
}
