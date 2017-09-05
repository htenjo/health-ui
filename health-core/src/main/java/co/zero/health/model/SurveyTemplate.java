package co.zero.health.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ManyToOne;

/**
 * Created by hernan on 6/30/17.
 */
@Getter
@Setter
@ToString
@Entity
public class SurveyTemplate extends AbstractEntity {
    private String name;
    private String jsSurvey;
    @Enumerated(EnumType.STRING)
    private SurveyType type;
    @ManyToOne
    private Specialty specialty;
}
