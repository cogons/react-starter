import fetch from '@/utils/fetch'

class Data {



    static getQuestion(date){
        return fetch({
            url:'/questions/query',
            method:'get',
            data:{
                date: date
            }
        })
    }
    static getAnswers(date){
        return fetch({
            url:'/answers/list_all',
            method:'get',
            data:{
                date:date
            }
        })
    }

    static createAnswer(content, date){
        return fetch({
            url:'/answers/create',
            method:'post',
            data:{
                date: date,
                content: content,
                public: true
            }
        })
    }
}

export default Data