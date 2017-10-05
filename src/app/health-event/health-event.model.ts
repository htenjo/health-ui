import {Specialty} from '../specialty/specialty.model';
import {Survey} from '../survey/survey.model';

export class HealthEvent {
    constructor(
        public id:number,
        public name:string,
        public createdDate:string,
        public specialty:Specialty,
        public surveys:Survey[] = []
    ){}

    static empty() : HealthEvent {
        return new HealthEvent(null, '', '', null);
    }
}