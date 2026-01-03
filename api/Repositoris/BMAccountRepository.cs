namespace api.Repositoris;

public class BMAccountRepository : IBMAccountRepository
{
        #region dependency injections
    private readonly IMongoCollection<BuildingManeger> _collection;
    // constructor - dependency injections
    private readonly ITokenService _tokenService;
    public BMAccountRepository(IMongoClient client, IMongoDbSettings dbSettings, ITokenService tokenService)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<BuildingManeger>("maneger");
        _tokenService = tokenService;
    }
    #endregion
    public async Task<LoggedInManeger?> RegisterAsync(BuildingManeger buildingManeger, CancellationToken cancellationToken)
    {
        BuildingManeger user = await _collection.Find(doc =>
            doc.PhoneNumber == buildingManeger.PhoneNumber).FirstOrDefaultAsync(cancellationToken);

        if (user is not null)
        {
            return null;
        }

        await _collection.InsertOneAsync(buildingManeger, null, cancellationToken);

        string token = _tokenService.CreateToken(buildingManeger);

        LoggedInManeger loggedInManeger =
            Mappers.BuildingManegerToLoggedInManeger(buildingManeger, token);

        return loggedInManeger;

    }

    public async Task<LoggedInManeger?> LoginAsync(LoginTecDto logintecdto, CancellationToken cancellationToken)
    {
        BuildingManeger user = await _collection.Find(doc => doc.PhoneNumber == logintecdto.PhoneNumber && doc.Password == logintecdto.Password).FirstOrDefaultAsync(cancellationToken);

        if (user is null)
        {
            return null;
        }

        string token = _tokenService.CreateToken(user);

        LoggedInManeger loggedInManeger =
            Mappers.BuildingManegerToLoggedInManeger(user, token);

        return loggedInManeger;
    }
}
