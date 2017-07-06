package co.zero.health.service.impl;

import co.zero.health.model.Specialty;
import co.zero.health.persistence.SpecialtyRepository;
import co.zero.health.service.SpecialtyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by hernan on 7/2/17.
 */
@Service
public class SpecialtyServiceImpl implements SpecialtyService {
    @Autowired
    private SpecialtyRepository specialtyRepository;

    @Override
    public Specialty save(Specialty specialty) {
        return specialtyRepository.save(specialty);
    }

    @Override
    public void delete(String specialtyId) {
        specialtyRepository.delete(specialtyId);
    }

    @Override
    public List<Specialty> findAllByCompanyId(String companyId) {
        return specialtyRepository.findAllByCompanyId(companyId);
    }
}
