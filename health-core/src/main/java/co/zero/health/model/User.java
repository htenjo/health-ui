package co.zero.health.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by hernan on 6/22/17.
 */
@Getter
@Setter
@ToString
@Document
public class User {
    private String id;
    @Indexed(unique = true)
    private String username;
    private String password;
    private String name;
    private String email;
    //Maybe: Admin, Consultor, Viewer, SuperAdmin
    private String[] roles;
    private boolean enabled;
    //Lazy is not working for now
    @DBRef//(lazy = true)
    private Company company;
}