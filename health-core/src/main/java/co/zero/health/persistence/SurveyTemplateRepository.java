package co.zero.health.persistence;

import co.zero.health.model.SurveyTemplate;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SurveyTemplateRepository extends PagingAndSortingRepository<SurveyTemplate, Long> {
    List<SurveyTemplate> findAllBySpecialtyId(Long specialtyId);
}