using System.Runtime.InteropServices;

namespace api.Models;

public record BuildingManeger(
    [Optional]
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)] string? Id,
    string FirstName,
    string LastName,
    string PhoneNumber,
    string Password,
    string ConfirmPassword,
    //
    string City,
    string Country,
    string Plaque,
    int Floor,
    int Unit,
    string PostCode
);