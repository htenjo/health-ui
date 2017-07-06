package co.zero.health.persistence;

import co.zero.health.model.Specialty;
import co.zero.health.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SpecialtyRepository extends MongoRepository<Specialty, String> {
    List<Specialty> findAllByCompanyId(String companyId);
}
