import axios from 'axios'

const baseUrl = 'https://marrs.cc/timesquare/api/v1'

const fetch = (request) => {

    return axios({
        method: request.method,
        url: baseUrl+request.url,
        data: request.data,
        params: request.data,
        withCredentials:true
      }).then((res)=>{
          return res.data
      })

}

export default fetch

