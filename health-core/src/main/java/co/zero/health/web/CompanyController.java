package co.zero.health.web;

import co.zero.health.common.Constant;
import co.zero.health.model.Company;
import co.zero.health.model.Company;
import co.zero.health.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by hernan on 7/4/17.
 */
@RestController
@RequestMapping("/company")
@SuppressWarnings(Constant.WARNING_UNUSED)
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Company>> listAll() {
        List<Company> companies = companyService.findAll();
        return new ResponseEntity<>(companies, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Company> save(@RequestBody Company company) {
        Company persistedCompany = companyService.save(company);
        return new ResponseEntity<>(persistedCompany, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{companyId}", method = RequestMethod.GET)
    public ResponseEntity<Company> find(@PathVariable("companyId") String companyId) {
        return companyService.find(companyId)
                .map(company -> new ResponseEntity<>(company, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @RequestMapping(value = "/{companyId}", method = RequestMethod.DELETE)
    public ResponseEntity<Company> delete(@PathVariable("companyId") String companyId) {
        companyService.delete(companyId);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

}
