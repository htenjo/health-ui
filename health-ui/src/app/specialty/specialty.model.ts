export class Specialty {
    constructor(
        public id:string,
        public name:string
    ){}

    static empty() : Specialty {
        return new Specialty(null, '');
    }
}