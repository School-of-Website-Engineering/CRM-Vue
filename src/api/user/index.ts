export const USER_LOGIN = '/api/user/login';
const USER_DATA = '/api/user/data/query';

export interface UserState {
    token: string;
    username: string;
}
export interface UserDataState {
    data: string;
    name: string;
    address: string;
}

export interface userApi {
    getUserLogin(userData: object): Promise<UserState>;
    getUserData(): Promise<UserDataState>;
}

class UserService implements userApi {
    getUserLogin(userData: object): Promise<UserState> {
        return http.post(USER_LOGIN, { userData });
    }
    getUserData(): Promise<UserDataState> {
        return http.get(USER_DATA);
    }
}
export default new UserService();
