namespace api.DTOs;

public record UpdateTecDto(
    string Technique,
    string City,
    string Country,
    string PhoneNumber,
    // [EmailAddress] string Email,
    string Password
);