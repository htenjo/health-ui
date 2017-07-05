package co.zero.health.service.impl;

import co.zero.health.model.Client;
import co.zero.health.persistence.ClientRepository;
import co.zero.health.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Created by hernan on 7/4/17.
 */
@Service
public class ClientServiceImpl implements ClientService {
    @Autowired
    private ClientRepository clientRepository;

    @Override
    public Client save(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public void delete(String clientId) {
        clientRepository.delete(clientId);
    }

    @Override
    public Optional<Client> find(String clientId) {
        return Optional.ofNullable(clientRepository.findOne(clientId));
    }

    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }
}
