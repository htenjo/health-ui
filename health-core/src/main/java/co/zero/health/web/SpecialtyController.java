package co.zero.health.web;

import co.zero.health.common.Constant;
import co.zero.health.model.Specialty;
import co.zero.health.service.SpecialtyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by hernan on 7/2/17.
 */
@RestController
@RequestMapping("/specialty")
@SuppressWarnings(Constant.WARNING_UNUSED)
public class SpecialtyController {
    @Autowired
    private SpecialtyService specialtyService;

    @RequestMapping(value = "/client/{clientId}", method = RequestMethod.GET)
    public ResponseEntity<List<Specialty>> findAllByClientId(@PathVariable("clientId") String clientId){
        List<Specialty> specialties = specialtyService.findAllByClientId(clientId);
        return new ResponseEntity<>(specialties, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Specialty> saveSpecialty(@RequestBody Specialty specialty){
        Specialty persistedSpecialty = specialtyService.save(specialty);
        return new ResponseEntity<>(persistedSpecialty, HttpStatus.CREATED);
    }
}