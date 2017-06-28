package co.zero.health.web;

import co.zero.health.model.User;
import co.zero.health.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<User> findUser(@PathVariable("username") String username){
        return  userService.findByUsername(username)
                .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<User> saveUser(@RequestBody User user){
        User persistedUser = userService.save(user);
        return new ResponseEntity<>(persistedUser, HttpStatus.CREATED);
    }
}
