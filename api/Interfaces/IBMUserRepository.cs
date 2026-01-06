namespace api.Interfaces;

public interface IBMUserRepository
{
        public Task<UpdateResult?> UpdateByIdAsync(string userId, BuildingManeger buildingManeger, CancellationToken cancellationToken);
}