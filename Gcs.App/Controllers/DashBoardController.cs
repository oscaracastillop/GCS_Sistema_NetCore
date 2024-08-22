using Microsoft.AspNetCore.Mvc;

namespace Gcs.App.Controllers
{
    public class DashBoardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
