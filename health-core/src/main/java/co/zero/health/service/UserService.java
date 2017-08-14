package co.zero.health.service;

import co.zero.health.model.User;
import org.springframework.context.annotation.DependsOn;

import java.util.Optional;

/**
 * Created by hernan on 6/22/17.
 */
@Deprecated
public interface UserService {
    Optional<User> findByUsername(String username);
}