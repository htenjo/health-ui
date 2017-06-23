package co.zero.health.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;

/**
 * Created by hernan on 6/22/17.
 */
@Getter
@Setter
@ToString
public class User {
    @Id
    public String id;
    private String username;
    private String password;
    private String name;
    private String[] roles;
}
