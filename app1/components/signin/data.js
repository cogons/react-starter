import fetch from '@/utils/fetch'

class Data {
    static signin(account){
        return fetch({
            url:'/sign/in',
            method:'get',
            data:{
                username:account.username,
                password:account.password
            }
        })
    }
}

export default Data