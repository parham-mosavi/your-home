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

    public async Task<List<Technician>> GetAllTecAsync(CancellationToken cancellationToken)
    {
        List<Technician> user = await _collection.Find(new BsonDocument()).ToListAsync(cancellationToken);

        return user;
    }


    public async Task<List<Technician>> GetByTechniqueAsync(string Technique, CancellationToken cancellationToken)
    {
        List<Technician> technicians = await _collection
            .Find<Technician>(doc => doc.Technique == Technique).ToListAsync(cancellationToken);

        return technicians;
    }
}
        // List<AppUser> appUsers = await _collection.Find(new BsonDocument()).ToListAsync(cancellationToken);

        // return appUsers;