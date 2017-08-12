package co.zero.health.service.impl;

import co.zero.health.model.User;
import co.zero.health.persistence.UserRepository;
import co.zero.health.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Created by hernan on 6/22/17.
 */
@Service
@Deprecated
public class UserServiceImpl implements UserService {
    //@Autowired
    private UserRepository userRepository;

    @Override
    public Optional<User> findByUsername(String username) {
        User user = userRepository.findByUsername(username);
        return Optional.ofNullable(user);
    }
}
