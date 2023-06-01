namespace ZS.MultiSocialPostsGui.Api.Models;


public class VideoPostModel
{
	public int? Id { get; set; }
	public string? Title { get; set; }
	public string? Description { get; set; }
	public IFormFile? Video { get; set; }
	public DateTime? CreatedAt { get; set; }
	public string? UserId { get; set; }
	// Other properties

	// Constructor
	public VideoPostModel()
	{
		CreatedAt = DateTime.Now;
	}
}
