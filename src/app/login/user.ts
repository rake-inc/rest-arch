export class User{

    constructor(
        public firstname:string,
        public lastname: string,
        public email: string,
        public mobile: number,
        public password: any,
        public confirmPassword: any
    ){}
}