package co.zero.health.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * Created by hernan on 6/30/17.
 */
@Getter
@Setter
@ToString
public class SurveyTemplate {
    private String jsSurvey;
    private SurveyType type;
    private Specialty specialty;
}
