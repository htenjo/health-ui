package co.zero.health.service;

import co.zero.health.model.Client;
import co.zero.health.model.Specialty;

import java.util.List;
import java.util.Optional;

/**
 * Created by hernan on 7/2/17.
 */
public interface ClientService {
    /**
     *
     * @param client
     * @return
     */
    Client save(Client client);

    /**
     *
     * @param clientId
     */
    void delete(String clientId);

    /**
     *
     * @param clientId
     * @return
     */
    Optional<Client> find(String clientId);

    /**
     *
     * @return
     */
    List<Client> findAll();
}