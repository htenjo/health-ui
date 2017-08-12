package co.zero.health.service;

import co.zero.health.model.Specialty;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by hernan on 7/2/17.
 */
public interface SpecialtyService {
    Specialty save(Specialty specialty);

    void delete(Long specialtyId);

    List<Specialty> findAllByCompanyId(Long companyId);
}