namespace api.Repositoris;

public class TecUserRepository : ITecUserRepository
{
    #region dependency injections
    private readonly IMongoCollection<Technician> _collection;
    // constructor - dependency injections
    public TecUserRepository(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Technician>("technician");
    }

    #endregion

    public async Task<UpdateTecDto?> Update(string userId, Technician technician, CancellationToken cancellationToken)
    {
        Technician? user = await _collection.Find(doc => doc.Id == userId).FirstOrDefaultAsync(cancellationToken);

        if (user is null)
        {
            return null;
        }

        UpdateDefinition<Technician> updateDef = Builders<Technician>.Update
            .Set(user => user.Password, technician.Password.Trim().ToLower())
            .Set(user => user.PhoneNumber, technician.PhoneNumber.Trim().ToLower())
            .Set(user => user.Technique, technician.Technique.Trim().ToLower())
            .Set(user => user.City, technician.City.Trim().ToLower())
            .Set(user => user.Country, technician.Country.Trim().ToLower());

        await _collection.UpdateOneAsync(user => user.Id == userId, updateDef, null, cancellationToken);

        UpdateTecDto updateTecDto = new(
            Password: user.Password,
            PhoneNumber: user.PhoneNumber,
            Technique: user.Technique,
            City: user.City,
            Country: user.Country
        );

        return updateTecDto;
    }
}