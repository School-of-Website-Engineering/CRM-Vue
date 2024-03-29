import http from '@/utils/http';
export const USER_LOGIN = '/api/demo/login';
export const USER_INFO = '/api/demo/info';
export const USER_LOGOUT = '/api/demo/logout';
export const USER_ADDRESS = '/api/demo/address';

export interface LoginParams {
    username: string;
    password: string;
}

export interface UserInfo {
    id: number;
    name: string;
    email: string;
}

export interface AddressInfo {
    province: string;
    city: string;
    district?: string;
}
export interface UserApi {
    login(data: LoginParams): Promise<Response>;
    getInfo(): Promise<Response>;
    logout(): Promise<Response>;
    getAddress(userId: number): Promise<Response>;
}

class UserService implements UserApi {
    login(data: LoginParams): Promise<Response> {
        return http.post(USER_LOGIN, data);
    }

    getInfo(): Promise<Response> {
        return http.get(USER_INFO);
    }

    logout(): Promise<Response> {
        return http.post(USER_LOGOUT);
    }
    getAddress(userId: number): Promise<Response> {
        return http.get(USER_ADDRESS, { params: { userId } });
    }
}

export default new UserService();
