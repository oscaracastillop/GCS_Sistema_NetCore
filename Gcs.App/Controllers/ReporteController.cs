using Microsoft.AspNetCore.Mvc;

namespace Gcs.App.Controllers
{
    public class ReporteController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ReporteVenta()
        {
            return View();
        }
    }
}
