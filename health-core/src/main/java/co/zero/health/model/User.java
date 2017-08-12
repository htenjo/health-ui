package co.zero.health.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * Created by hernan on 6/22/17.
 */
@Getter
@Setter
@ToString
@Deprecated
public class User {
    private String id;
    private String username;
    private String password;
    private String name;
    private String email;
    private String[] roles;
    private boolean enabled;
    private Company company;
}