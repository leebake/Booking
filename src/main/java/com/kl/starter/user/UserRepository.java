package com.kl.starter.user;

import java.util.Optional;

import com.kl.starter.support.jpa.CustomJpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CustomJpaRepository<User, Integer> {

	Optional<User> findByUsername(String username);

}
