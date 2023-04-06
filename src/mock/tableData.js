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
                    {
                        date: '2021-01-01',
                        name: 'yfjpl',
                        address:
                            '这个错误提示表明，您定义的 UserService 类型中的 getUserData 属性与 userApi 基础类型的同名属性不兼容。',
                        checked: true
                    },
                    { date: '2021-01-02', name: 'tjkne', address: '实际上定义的函数返回的类', checked: false },
                    {
                        date: '2021-01-03',
                        name: 'oqhtn',
                        address:
                            '为了解决这个错误，您需要修改 getUserData 函数的签名，使其返回值类型为 { data: UserDataState } 而非 { data: UserDataState[] }。这可以通过将函数返回值类型中的数组类型声明(UserDataState[])改为对象类型声明(UserDataState)来实现。\n' +
                            '\n' +
                            '修改示例：',
                        checked: false
                    },
                    {
                        date   : '2021-01-04',
                        name   : 'zjpje',
                        address: '这样就可以让 getUserData 函数的返回值类型与',
                        checked: true
                    },
                    {
                        date   : '2021-01-04',
                        name   : 'zjpje',
                        address: '这样就可以让 getUserData 函数的返回值类型与',
                        checked: true
                    },
                    {
                        date   : '2021-01-04',
                        name   : 'zjpje',
                        address: '这样就可以让 getUserData 函数的返回值类型与',
                        checked: true
                    },
                    {
                        date   : '2021-01-04',
                        name   : 'zjpje',
                        address: '这样就可以让 getUserData 函数的返回值类型与',
                        checked: true
                    }
                ]
            };
        }
    }
];
