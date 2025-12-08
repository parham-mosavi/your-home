namespace api.Repositoris;

public class TecMemberRepository : ITecMemberRepository
{
    #region dependency injections
    private readonly IMongoCollection<Technician> _collection;
    // constructor - dependency injections
    public TecMemberRepository(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Technician>("technician");
    }

    #endregion

    public async Task<List<Technician>> GetAllTec(CancellationToken cancellationToken)
    {
        List<Technician> user = await _collection.Find(new BsonDocument()).ToListAsync(cancellationToken);

        return user;
    }
}
        // List<AppUser> appUsers = await _collection.Find(new BsonDocument()).ToListAsync(cancellationToken);

        // return appUsers;