package com.example.inventory.model;

import org.hibernate.annotations.NaturalId;
import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Unit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 30)
    private ProductUnit name;

    public Unit() {

    }

    public Unit(ProductUnit name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ProductUnit getName() {
        return name;
    }

    public void setName(ProductUnit name) {
        this.name = name;
    }
}