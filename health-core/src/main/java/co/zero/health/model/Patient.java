package co.zero.health.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

/**
 * Created by hernan on 6/30/17.
 */
@Getter
@Setter
@ToString
@Document
public class Patient {
    private String id;
    private List<Survey> basicInfo;
    private List<Event> events;
    @DBRef(lazy = true)
    private Client client;
}