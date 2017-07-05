package co.zero.health.web;

import co.zero.health.common.Constant;
import co.zero.health.model.Client;
import co.zero.health.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by hernan on 7/4/17.
 */
@RestController
@RequestMapping("/client")
@SuppressWarnings(Constant.WARNING_UNUSED)
public class ClientController {
    @Autowired
    private ClientService clientService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Client> saveUser(@RequestBody Client client) {
        Client persistedClient = clientService.save(client);
        return new ResponseEntity<>(persistedClient, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{clientId}", method = RequestMethod.GET)
    public ResponseEntity<Client> find(@PathVariable("clientId") String clientId) {
        return clientService.find(clientId)
                .map(client -> new ResponseEntity<>(client, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @RequestMapping(value = "/{clientId}", method = RequestMethod.DELETE)
    public ResponseEntity<Client> delete(@PathVariable("clientId") String clientId) {
        clientService.delete(clientId);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Client>> listAll() {
        List<Client> clients = clientService.findAll();
        return new ResponseEntity<>(clients, HttpStatus.OK);
    }
}
