namespace api.DTOs;

public record LoggedInManeger(
    string FirstName,
    string LastName,
    string City,
    string Country,
    string Plaque,
    string PostCode,
    int Floor,
    int Unit,
    string Token
);