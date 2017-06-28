package co.zero.health.service;

import co.zero.health.model.User;
import co.zero.health.persistence.UserRepository;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Created by hernan on 6/22/17.
 */
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public Optional<User> login(String username, String password) {
        User user = userRepository.findByUsername(username);

        if (user != null && StringUtils.equalsIgnoreCase(username, user.getUsername())) {
            return Optional.of(user);
        } else {
            return Optional.empty();
        }
    }

    @Override
    public Optional<User> findByUsername(String username) {
        User user = userRepository.findByUsername(username);

        if (user != null) {
            return Optional.of(user);
        } else {
            return Optional.empty();
        }
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }
}
