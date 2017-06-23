package co.zero.health.web;

import co.zero.health.model.User;
import co.zero.health.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

/**
 * Created by hernan on 6/22/17.
 */
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    public Optional<User> findUser(@PathVariable("username") String username){
        return userService.findByUsername(username);
    }
}
