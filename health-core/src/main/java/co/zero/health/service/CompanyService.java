package co.zero.health.service;

import co.zero.health.model.Company;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

/**
 * Created by hernan on 7/2/17.
 */
public interface CompanyService {
    /**
     *
     * @param company
     * @return
     */
    Company save(Company company);

    /**
     *
     * @param companyId
     */
    void delete(Long companyId);

    /**
     *
     * @param companyId
     * @return
     */
    Optional<Company> find(Long companyId);

    /**
     *
     * @return
     */
    List<Company> findAll();
}