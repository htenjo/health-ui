package co.zero.health.service.impl;

import co.zero.health.model.Specialty;
import co.zero.health.model.Survey;
import co.zero.health.model.SurveyTemplate;
import co.zero.health.persistence.SurveyRepository;
import co.zero.health.service.SurveyService;
import co.zero.health.util.SecurityUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Created by hernan on 7/2/17.
 */
@Service
public class SurveyServiceImpl implements SurveyService {
    @Autowired
    private SurveyRepository surveyRepository;

    @Override
    public List<Survey> findAllByPatient(Long patientId) {
        return surveyRepository.findAllByPatientId(patientId);
    }

    @Override
    public Survey save(Survey entity) {
        return surveyRepository.save(entity);
    }

    @Override
    public Iterable<Survey> save(Iterable<Survey> entities) {
        return surveyRepository.save(entities);
    }

    @Override
    public Survey update(Survey survey) {
        return save(survey);
    }

    @Override
    public Optional<Survey> find(Long surveyId) {
        return Optional.ofNullable(surveyRepository.findOne(surveyId));
    }

    @Override
    public void delete(Long surveyId) {
        surveyRepository.delete(surveyId);
    }
}
