using Microsoft.AspNetCore.Mvc;
using ZS.MultiSocialPostsGui.Api.Models;

namespace ZS.MultiSocialPostsGui.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MultiSocialPostController : ControllerBase
{
    private readonly ILogger<MultiSocialPostController> _logger;
    private readonly Microsoft.Extensions.Hosting.IHostEnvironment _hostingEnvironment;

    public MultiSocialPostController(ILogger<MultiSocialPostController> logger,
                          Microsoft.Extensions.Hosting.IHostEnvironment hostingEnvironment )
    {
        _logger = logger;
        this._hostingEnvironment = hostingEnvironment ?? throw new ArgumentNullException(nameof(hostingEnvironment));
    }

   [HttpPost]
   [Route("video-post")]
   [RequestFormLimits
   (
        ValueLengthLimit = int.MaxValue,
        MultipartBodyLengthLimit = long.MaxValue
   )]
   [DisableRequestSizeLimit]

    public IActionResult CreateVideoPost([FromForm] VideoPostModel videoPost)
    {
        if (videoPost.Video == null || videoPost.Video.Length == 0)
        {
            return BadRequest("Video file is required");
        }

        // Save the video file to a location of your choice
        var filePath = Path.Combine(_hostingEnvironment.ContentRootPath, "Videos", videoPost.Video.FileName);
        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            videoPost.Video.CopyTo(stream);
        }

        // Process the video post data and save it to the database or perform any other actions
        // ...

        return Ok();
    }
}
