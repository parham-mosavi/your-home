using api.Interfaces;

namespace api.DTOs;

public static class Mappers
{
    public static LoggedInManeger BuildingManegerToLoggedInManeger(BuildingManeger buildingManeger, string tokenValue)
    {
        LoggedInManeger loggedInManeger = new LoggedInManeger(
            FirstName: buildingManeger.FirstName,
            LastName: buildingManeger.LastName,
            City: buildingManeger.City,
            Country: buildingManeger.Country,
            Plaque: buildingManeger.Plaque,
            PostCode: buildingManeger.PostCode,
            Token: tokenValue,
            Floor: buildingManeger.Floor,
            Unit: buildingManeger.Unit
        );
        return loggedInManeger;
    }

    public static LoggedInTecDto TechnicianToLoggedInTecDto(Technician technician)
    {
        LoggedInTecDto loggedInTecDto = new LoggedInTecDto(
            PhoneNumber: technician.PhoneNumber,
            Technique: technician.Technique,
            Country: technician.Country,
            // Token: tokenValue,
            City: technician.City
        );

        return loggedInTecDto;
    }

    public static BuildingManeger RegisterToBuildingManeger(RegisterDTO registerDTO)
    {
        BuildingManeger buildingManeger = new BuildingManeger(
            FirstName: registerDTO.FirstName,
            LastName: registerDTO.LastName,
            PhoneNumber: registerDTO.PhoneNumber,
            Password: registerDTO.Password,
            ConfirmPassword: registerDTO.ConfirmPassword,
            City: string.Empty,
            Country: string.Empty,
            Plaque: string.Empty,
            PostCode: string.Empty,
            Floor: 0,
            Unit: 0
        );

        return buildingManeger;
    }
}