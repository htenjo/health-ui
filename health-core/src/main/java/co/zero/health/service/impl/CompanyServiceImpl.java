package co.zero.health.service.impl;

import co.zero.health.model.Company;
import co.zero.health.persistence.CompanyRepository;
import co.zero.health.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Created by hernan on 7/4/17.
 */
@Service
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public Company save(Company company) {
        return companyRepository.save(company);
    }

    @Override
    public void delete(String companyId) {
        companyRepository.delete(companyId);
    }

    @Override
    public Optional<Company> find(String companyId) {
        return Optional.ofNullable(companyRepository.findOne(companyId));
    }

    @Override
    public List<Company> findAll() {
        return companyRepository.findAll();
    }
}
