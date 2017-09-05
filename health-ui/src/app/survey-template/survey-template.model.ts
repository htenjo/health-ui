export class SurveyTemplate {
    constructor(
        public id:string,
        public name:string,
        public jsSurvey:string,
        public type:string
    ){}

    static empty() : SurveyTemplate {
        return new SurveyTemplate(null, '', '', '');
    }
}