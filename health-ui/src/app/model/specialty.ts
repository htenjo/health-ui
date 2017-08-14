import {Company} from "./company"

export class Specialty {
    constructor(
        private id:string,
        private name:string,
        private company:Company
    ){
    }
}