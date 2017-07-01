package co.zero.health.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;

/**
 * Created by hernan on 6/30/17.
 */
@Getter
@Setter
@ToString
public class Event {
    @DBRef(lazy = true)
    private Specialty specialty;
    private List<Survey> specificInfo;
}
