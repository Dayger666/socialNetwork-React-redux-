import * as axios from "axios";

let instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        "API-KEY":"e930d12b-6371-4ef5-abd3-26e1da0e3e16",
    }

});

export let userAPI={
    getUsers:(pageSize=1,pageNumber=10)=>
    {
        return instance.get(`users?count=${pageSize}&page=${pageNumber}`).then(res=>{
            return res.data;
        })
    },
    follow:(userId)=>{
        return instance.post(`follow/${userId}`,{},{ withCredentials:true,
            headers:{
                "API-KEY":"e930d12b-6371-4ef5-abd3-26e1da0e3e16",
            }}).then((res) => {
            return res.data;
        })
    },
    unFollow:(userId)=>{
        return instance.delete(`follow/${userId}`,{ withCredentials:true,
            headers:{
                "API-KEY":"e930d12b-6371-4ef5-abd3-26e1da0e3e16",
            }}).then((res) => {
                return res.data;
        })
    },


};