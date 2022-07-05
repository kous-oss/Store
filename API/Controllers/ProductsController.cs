using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
    public class ProductsController:ControllerBase
    {
        private readonly StoreContext _storeContext;
        public ProductsController(StoreContext storeContext)
        {
            this._storeContext = storeContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts(){

            return await _storeContext.Products.ToListAsync();
            
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Product>> GetProductBasedOnId(int id){

            return await _storeContext.Products.FindAsync(id);
        }
    }
}