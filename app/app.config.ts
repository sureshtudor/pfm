export class AppSettings {

    public static get USERS_URL(): string {
        return 'http://jsonplaceholder.typicode.com/users';
    }

    public static get LOGINS_URL(): string {
        return 'http://localhost:4000/logins';
    }

    public static get TRADE_URL(): string {
        return 'http://localhost:4000/trades';
    }
}