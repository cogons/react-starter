import fetch from '@/utils/fetch'

class Data {
    static signup(account){
        return fetch({
            url:'/sign/up',
            method:'get',
            data:{
                username:account.username,
                nickname:account.nickname,
                password:account.password
            }
        })
    }
}

export default Data