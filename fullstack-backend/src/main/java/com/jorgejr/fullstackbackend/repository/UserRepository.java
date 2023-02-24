package com.jorgejr.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jorgejr.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
