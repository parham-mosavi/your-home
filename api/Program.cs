
var builder = WebApplication.CreateBuilder(args);
// Add services to the container.

builder.Services.AddApplicationService(builder.Configuration);
builder.Services.AddRepositoryService();
builder.Services.AddIdentityService(builder.Configuration);//????????////?????????????????????????

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseHttpsRedirection();

app.UseCors(); //1

app.UseAuthentication(); //2

app.UseAuthorization(); //3

app.MapControllers();

app.Run();

