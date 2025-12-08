namespace api.DTOs;

public record LoggedInManeger(
    string FirstName,
    string LastName,
    string PhoneNumber,
    string City,
    string Country,
    string Plaque,
    string PostCode,
    string Token,
    int Floor,
    int Unit
);