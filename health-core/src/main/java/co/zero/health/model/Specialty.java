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
public class Specialty {
    private String id;
    private String name;
    @DBRef(lazy = true)
    private Client client;
    private List<SurveyTemplate> surveys;
}
