package com.example.inventory.repository;

import com.example.inventory.model.Order;
import com.example.inventory.model.OrderDetails;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {
/*    Optional<OrderDetails> findById(Long orderId);

    Page<OrderDetails> findByCreatedBy(Long userId, Pageable pageable);

    long countByCreatedBy(Long userId);

    List<OrderDetails> findByIdIn(List<Long> orderIds);

    List<OrderDetails> findByIdIn(List<Long> orderIds, Sort sort);*/
}