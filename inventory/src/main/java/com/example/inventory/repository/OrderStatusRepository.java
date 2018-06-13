package com.example.inventory.repository;

import com.example.inventory.model.OrderStatus;
import com.example.inventory.model.OrderStatusName;
import com.example.inventory.model.Role;
import com.example.inventory.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface OrderStatusRepository extends JpaRepository<OrderStatus, Long> {
    Optional<OrderStatus> findByName(OrderStatusName orderStatusName);
}