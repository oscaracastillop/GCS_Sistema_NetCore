﻿using Microsoft.AspNetCore.Mvc;

namespace Gcs.App.Controllers
{
    public class VentaController : Controller
    {
        public IActionResult NuevaVenta()
        {
            return View();
        }
        public IActionResult HistorialVenta()
        {
            return View();
        }
    }
}
