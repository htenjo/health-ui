package co.zero.health.service;

import co.zero.health.model.User;

import java.util.Optional;

/**
 * Created by hernan on 6/22/17.
 */
public interface UserService {
    Optional<User> login(String username, String password);
    Optional<User> findByUsername(String username);
    User save(User user);
}