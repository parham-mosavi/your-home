using Microsoft.AspNetCore.Authorization;

namespace api.Controllers;

// [Authorize]
public class TecMemberController(ITecMemberRepository tecMemberRepository) : BaseApiController
{
    [HttpGet("getall-tec")]
    public async Task<ActionResult<List<LoggedInTecDto>>> GetAllTec(CancellationToken cancellationToken)
    {
        List<Technician>? users = await tecMemberRepository.GetAllTec(cancellationToken);

        if (users is null)
        {
            return NoContent();
        }

        List<LoggedInTecDto> loggedInTecDtos = [];

        foreach (Technician user in users)
        {
            LoggedInTecDto loggedInTecDto =
                Mappers.TechnicianToLoggedInTecDto(user);

            loggedInTecDtos.Add(loggedInTecDto);
        }
        return loggedInTecDtos;
    }
}




// [HttpGet("getall")]
// public async Task<ActionResult<List<MemberDto>>> GetAll(CancellationToken cancellationToken)
// {
//     List<AppUser>? appUser = await memberRepository.GetAllAsync(cancellationToken);

//     if (appUser is null)
//         return NoContent();

//     List<MemberDto> memberDtos = [];

//     foreach (AppUser user in appUser)
//     {
//         MemberDto memberDto = new(
//             Email: user.Email,
//             UserName: user.UserName,
//             Age: user.Age,
//             Gender: user.Gender,
//             City: user.City,
//             Country: user.Country
//         );

//         memberDtos.Add(memberDto);
//     }
//     return memberDtos;
// }

// [HttpGet("get-by-username/{userName}")]
// public async Task<ActionResult<MemberDto>> GetByUserName(string userName, CancellationToken cancellationToken)
// {
//     MemberDto? memberDto = await memberRepository.GetByUserNameAsync(userName, cancellationToken);

//     if (memberDto is null)
//         return BadRequest("User not found");

//     return memberDto;
// }