package com.jfsd.farm_trade_backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.jfsd.farm_trade_backend.Model.Product;
import com.jfsd.farm_trade_backend.Service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:5173") // Adjust the origin to match your frontend URL and port
public class ProductController {

    @Autowired
    private ProductService productService;

    // Endpoint to add a new product
    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @GetMapping("/products")
    public List<Product> getAllProduct(){
        return productService.getAllProducts();
    }

     @GetMapping("products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Integer id) {
        Product product = productService.findByprodId(id);
        if (product == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    // Additional endpoints (get, update, delete) can be added as needed
}
