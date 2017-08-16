import {Company} from "../company/company.model"

export class Specialty {
    constructor(
        private id:string,
        private name:string,
        private company:Company
    ){}
}