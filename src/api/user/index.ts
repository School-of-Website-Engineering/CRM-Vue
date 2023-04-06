export const USER_LOGIN = '/api/user/login';
const USER_DATA = '/api/user/data/query';

export interface UserState {
    token: string;
    username: string;
}
export interface UserDataState {
    date: string;
    name: string;
    address: string;
    checked: boolean;
}

export interface userApi {
    getUserLogin(userData: object): Promise<Response>;
    getUserData(): Promise<{ data: UserDataState[] }>;
}

class UserService implements userApi {
    getUserLogin(userData: object): Promise<Response> {
        return http.post(USER_LOGIN, { userData });
    }
    getUserData(): Promise<{ data: UserDataState[] }> {
        return http.get(USER_DATA);
    }
}
export default new UserService();
