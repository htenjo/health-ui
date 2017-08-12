package co.zero.health.persistence;

import co.zero.health.model.User;

@Deprecated
public interface UserRepository {
    User findByUsername(String username);
}