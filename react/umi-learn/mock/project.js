import Mock from "mockjs";

const data =Mock.mock({
    code:"0",
    msg:"",
    data:{
        "total|10-20":2,
        "rows|5-15":[
            {
                "id|+1":1,
                "name":"@cname",
                description:"@city"
            }
        ]
    }
})

console.log(data)

export default {
    '/api/project':data 
    
}