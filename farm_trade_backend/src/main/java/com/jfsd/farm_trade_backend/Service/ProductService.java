package com.jfsd.farm_trade_backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jfsd.farm_trade_backend.Model.Product;
import com.jfsd.farm_trade_backend.Repository.ProductRepo;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepository;

    // Save a new product
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    // Get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product findByprodId(Integer id) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        return optionalProduct.orElse(null); // Return product if found, otherwise return null
    }

    // Additional methods (update, delete, etc.) can be added as needed
}
