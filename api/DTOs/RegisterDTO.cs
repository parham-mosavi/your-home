
namespace api.DTOs;

public record RegisterDTO(
    string FirstName,
    string LastName,
    string PhoneNumber,
    string Password,
    string ConfirmPassword
);