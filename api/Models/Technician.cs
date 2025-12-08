namespace api.Models;

public record Technician(
    [property: BsonId, BsonRepresentation(BsonType.ObjectId)] string? Id,
    string FirstName,
    string LastName,
    string Technique,
    string City,
    string Country,
    // [Length(11, 11)] 
    string PhoneNumber,
    // [EmailAddress] string Email,
    // [Length(8, 16)] 
    string Password,
    string ConfirmPassword
);