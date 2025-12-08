namespace api.DTOs;

public record LoggedInTecDto (
    string PhoneNumber,
    string Technique,
    string Country,
    string City
);