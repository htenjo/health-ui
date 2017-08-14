package co.zero.health.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

/**
 * Created by hernan on 6/30/17.
 */
@Getter
@Setter
@ToString
@Entity
public class Patient extends AbstractEntity {
    private String firstName;
    private String lastName;
    private String nuip;
    @OneToMany
    private List<Survey> basicInfo;
    @OneToMany
    private List<Event> events;
    @ManyToOne
    private Company company;
}