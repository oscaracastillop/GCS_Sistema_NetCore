using Microsoft.AspNetCore.Mvc;

namespace Gcs.App.Controllers
{
    public class NegocioController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
