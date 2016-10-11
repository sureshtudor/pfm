
// export var USERS_URL = 'http://jsonplaceholder.typicode.com/users'; 

export class AppSettings {

    public static get USERS_URL(): string { 
        return 'http://jsonplaceholder.typicode.com/users'; 
    }
    
    public static get TRADE_URL(): string { 
        return 'http://localhost:4000/trades'; 
    }
}