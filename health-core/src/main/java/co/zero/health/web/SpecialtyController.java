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
@RequestMapping(value = "/specialty"
        , consumes = Constant.CONTENT_TYPE_JSON
        , produces = Constant.CONTENT_TYPE_JSON
)
@SuppressWarnings(Constant.WARNING_UNUSED)
public class SpecialtyController {
    @Autowired
    private SpecialtyService specialtyService;

    @RequestMapping(value = "/company/{companyId}", method = RequestMethod.GET)
    public ResponseEntity<List<Specialty>> findAllByClientId(@PathVariable("companyId") Long companyId){
        List<Specialty> specialties = specialtyService.findAllByCompanyId(companyId);
        return new ResponseEntity<>(specialties, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Specialty> save(@RequestBody Specialty specialty){
        Specialty persistedSpecialty = specialtyService.save(specialty);
        return new ResponseEntity<>(persistedSpecialty, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{specialtyId}", method = RequestMethod.DELETE)
    public ResponseEntity<Specialty> delete(@PathVariable("specialtyId") Long specialtyId) {
        specialtyService.delete(specialtyId);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}