namespace api.Repositoris;

public class TecAccountRepository : ITecAccountRepository
{

    #region dependency injections
    private readonly IMongoCollection<Technician> _collection;
    // constructor - dependency injections
    public TecAccountRepository(IMongoClient client, IMongoDbSettings dbSettings)
    {
        var dbName = client.GetDatabase(dbSettings.DatabaseName);
        _collection = dbName.GetCollection<Technician>("technician");
    }

    #endregion


    public async Task<LoggedInTecDto?> RegisterAsync(Technician technician, CancellationToken cancellationToken)
    {
        Technician user = await _collection.Find(doc => doc.PhoneNumber == technician.PhoneNumber)
            .FirstOrDefaultAsync(cancellationToken);

        if (user is not null)
        {
            return null;
        }

        await _collection.InsertOneAsync(technician, null, cancellationToken);

        LoggedInTecDto loggedInTecDto =
            Mappers.TechnicianToLoggedInTecDto(technician);

        return loggedInTecDto;
    }

    public async Task<LoggedInTecDto?> LoginAsync(LoginTecDto loginTecDto, CancellationToken cancellationToken)
    {
        Technician user = await _collection.Find(doc
        => doc.PhoneNumber == loginTecDto.PhoneNumber && doc.Password == loginTecDto.Password).FirstOrDefaultAsync(cancellationToken);

        if (user is null)
        {
            return null;
        }

        LoggedInTecDto loggedInTecDto =
            Mappers.TechnicianToLoggedInTecDto(user);

        return loggedInTecDto;
    }  
}
