import fetch from '@/utils/fetch'

class Data {
    static getMine(){
        return fetch({
            url:'/questions/list_ones',
            method:'get',
            data:{
                type:'full'
            }
        })
    }
}

export default Data