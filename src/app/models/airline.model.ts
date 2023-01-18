
export class AirlineName {
 
    constructor(
        public name: string,
    ) {}
}

export class UserLogin {
 
    constructor(
        public name: string,
        public username: string,
        public password: number,
        public remember_me: string,
    ) {}
}