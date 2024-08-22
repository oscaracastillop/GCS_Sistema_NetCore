using Microsoft.AspNetCore.Mvc;

namespace Gcs.App.Controllers
{
    public class ProductoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
