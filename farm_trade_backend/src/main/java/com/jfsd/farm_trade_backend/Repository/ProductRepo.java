package com.jfsd.farm_trade_backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.jfsd.farm_trade_backend.Model.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {
    // Additional query methods can be defined here if needed
}
