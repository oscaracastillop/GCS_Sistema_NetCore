﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Gcs.BLL.Interfaces;
using Gcs.DAL.Interfaces;
using Gcs.Entity;

namespace Gcs.BLL.Implementacion
{
    public class RolService : IRolService
    {
        private readonly IGenericRepository<Rol> _repositorio;

        public RolService(IGenericRepository<Rol> repositorio)
        {
            _repositorio = repositorio;
        }

        public async Task<List<Rol>> Lista()
        {
            IQueryable<Rol> query = await _repositorio.Consultar();

            return query.ToList();
        }
    }
}
