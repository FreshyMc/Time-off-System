export class User {
    constructor(
    	public id:number,
    	public admin:boolean,
        public name: string,
        public email: string,
        public password: string,
        public egn:number,
        public pto:number
    ) {}
}
