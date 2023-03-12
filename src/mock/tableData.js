// /mock/testUser.js
export default [
    // 用户登录
    {
        // 请求地址
        url     : '/api/user/data/query',
        // 请求方法
        method  : 'get',
        // 响应数据
        response: () => {
            return {
                code   : 0,
                message: 'success',
                data   : [
                    { data: 19, name: 'yfjpl', address: 'quzqvrxkfw' },
                    { data: 29, name: 'tjkne', address: 'wzygcmhqux' },
                    { data: 73, name: 'oqhtn', address: 'bblshpufax' },
                    { data: 86, name: 'zjpje', address: 'ktulqxydsg' }
                ]
            };
        }
    }
];
