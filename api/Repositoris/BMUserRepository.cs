namespace api.Repositoris;

public class BMUserRepository : IBMUserRepository
{
    #region dependency injections
    private readonly IMongoCollection<BuildingManeger> _collection;
    // constructor - dependency injections
    private readonly ITokenService _tokenService;
    public BMUserRepository(IMongoClient client, IMongoDbSettings dbSettings, ITokenService tokenService)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<BuildingManeger>("maneger");
        _tokenService = tokenService;
    }
    #endregion

    public async Task<UpdateResult?> UpdateByIdAsync(string userId, BuildingManeger buildingManeger, CancellationToken cancellationToken)
    {
        UpdateDefinition<BuildingManeger> updateDef = Builders<BuildingManeger>.Update
        .Set(doc => doc.FirstName, buildingManeger.FirstName)
        .Set(doc => doc.LastName, buildingManeger.LastName)
        .Set(doc => doc.PhoneNumber, buildingManeger.PhoneNumber)
        .Set(doc => doc.City, buildingManeger.City)
        .Set(doc => doc.Country, buildingManeger.Country)
        .Set(doc => doc.Floor, buildingManeger.Floor)
        .Set(doc => doc.Unit, buildingManeger.Unit)
        .Set(doc => doc.Plaque, buildingManeger.Plaque)
        .Set(doc => doc.PostCode, buildingManeger.PostCode);

        UpdateResult? result = await _collection.UpdateOneAsync
        (user => user.Id == userId, updateDef, null, cancellationToken);

        if (!result.IsModifiedCountAvailable) return null;

        return result;
    }
}
