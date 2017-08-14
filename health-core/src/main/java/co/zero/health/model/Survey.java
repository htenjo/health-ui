package co.zero.health.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;

/**
 * Created by hernan on 6/30/17.
 */
@Getter
@Setter
@ToString
@Entity
public class Survey extends AbstractEntity {
    private String jsSurvey;
    private String surveyAnswers;
    private boolean solved;
}