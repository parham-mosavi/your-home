namespace api.Models;

public record Technician(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)] string? Id,
    string FirstName,
    string LastName,
    string Technique,
    string City,
    string Country,
    string PhoneNumber,
    string Password,
    string ConfirmPassword
);