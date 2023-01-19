export class User {

    static FromId90({id90_user_id, first_name, username, last_name, airline}) {
        return new User(id90_user_id, first_name, username, last_name, airline )
    }

    constructor(
       public  id90_user_id:string,
       public  first_name:string,
       public  username:string,
       public  last_name:string,
       public airline:string,
    ) {

    }

}
