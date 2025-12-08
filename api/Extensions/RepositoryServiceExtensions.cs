
namespace api.Extensions;

public static class RepositoryServiceExtensions
{
    public static IServiceCollection AddRepositoryService(this IServiceCollection services)
    {
        services.AddScoped<ITecAccountRepository, TecAccountRepository>();
        services.AddScoped<ITecMemberRepository, TecMemberRepository>();
        services.AddScoped<ITecUserRepository, TecUserRepository>();
        services.AddScoped<IBManegerRepository, BManegerRepository>();

        services.AddScoped<ITokenService, TokenService>();

        return services;
    }
}
